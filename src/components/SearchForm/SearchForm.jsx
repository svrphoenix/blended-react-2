import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: '',
  };
  handleInput = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          value={query}
          required
          autoFocus
          onChange={this.handleInput}
        />
      </SearchFormStyled>
    );
  }
}
