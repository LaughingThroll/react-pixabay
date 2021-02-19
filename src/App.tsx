import React, { Component } from 'react'

import Images from './components/Images/Images'
import Modal from './components/Modal'
import SearchForm from './components/SearchForm'
import Pagination from './components/Pagination'

import { URL } from './constant'
import { makeRequest } from './utils/makeRequst'
import { IImagePixAbay, IResponsePixAbay } from './types'


interface IAppState {
  images: IImagePixAbay[],
  isLoading: boolean,
  query: string,
  prevQuery: string,
  page: number,
  allPages: number,
  modal: {
    isOpen: boolean
  },
  modalImage: {
    src: string,
    tags: string
  }
}

export class App extends Component<{}, IAppState> {
  private input: React.RefObject<HTMLInputElement>

  constructor(props: {}) {
    super(props)

    this.state = {
      images: [],
      isLoading: true,
      query: '',
      prevQuery: '',
      page: 1,
      allPages: 0,
      modal: {
        isOpen: false
      },
      modalImage: {
        src: '',
        tags: ''
      }
    }

    this.input = React.createRef()
  }


  componentDidMount = () => {
    makeRequest(`${URL}&q=${this.state.prevQuery}`).then(({ total, hits: images }: IResponsePixAbay) => {
      this.setState({ allPages: Math.ceil(total / 20), isLoading: false, images })
    })
    this.input.current?.focus()
  }

  componentDidUpdate = (_: {}, prevState: IAppState) => {

    if (prevState.page !== this.state.page 
      && this.state.page >= 1 && this.state.page <= this.state.allPages
      && this.state.images
      ) {
      const { query, page } = this.state

      this.setState({ isLoading: true })

      makeRequest(`${URL}&q=${query}&page=${page}`).then(({ hits: images }: IResponsePixAbay) => {
        this.setState({ isLoading: false, images })
      })

      this.input.current?.focus()
    }
  }

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value })
  }

  onSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const { query, prevQuery, page } = this.state

    if (!query || query === prevQuery) return

    this.setState({ isLoading: true, page: 1 })

    makeRequest(`${URL}&q=${query}&page=${page}`)
      .then(({ hits: images }: IResponsePixAbay) => {
        this.setState({ prevQuery: query, isLoading: false, images })
      })
  }

  closeModal = () => {
    this.setState({ modal: { isOpen: false } })
  }

  openModal = () => {
    this.setState({ modal: { isOpen: true } })
  }

  handleImageClick = (src: string, tags: string) => {
    this.setState({ modalImage: { src, tags } })
    this.openModal()
  }

  setNextPage = () => {
    if (this.state.page >= this.state.allPages || this.state.images) return
    this.setState({ page: this.state.page + 1 })
  }

  setPrevPage = () => {
    if (this.state.page <= 1 || this.state.images) return
    this.setState({ page: this.state.page - 1 })
  }


  render() {

    const { isLoading, images, query, modal: { isOpen }, modalImage: { src, tags } } = this.state

    return (
      <>
        <div className="wrapper">
          <div className="content">
            <header className="header">
              <div className="container">
                <SearchForm
                  onSubmit={this.onSubmit}
                  onChange={this.onChangeInput}
                  value={query}
                  inputRef={this.input}

                />
              </div>
            </header>
            <Images
              isLoading={isLoading}
              images={images}
              onClick={this.handleImageClick}
            />
          </div>

          <footer className="footer">
            <div className="container">
              <Pagination
                onNext={this.setNextPage}
                onPrev={this.setPrevPage}
              />
            </div>
          </footer>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={this.closeModal}
        >
          <img src={src} alt={tags} />
        </Modal>
      </>
    )
  }
}

export default App
