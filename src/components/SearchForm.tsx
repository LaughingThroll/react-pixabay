import React, { Component } from 'react'

interface ISearchForm {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (e: React.MouseEvent) => void,
  value: string,
  inputRef?: React.RefObject<HTMLInputElement> | null
}

class SearchForm extends Component<ISearchForm, {}> {
  render() {
    const { onSubmit, onChange, value, inputRef } = this.props
    return (
      <form className="search-form">
        <input className="search-form__input" ref={inputRef}  onChange={onChange} value={value} type="text" placeholder="Введите что-то... " />
        <button className="search-form__button" type="submit" onClick={onSubmit}> Тыыыкк!!!  </button>
      </form>
    )
  }
  
}

export default SearchForm




