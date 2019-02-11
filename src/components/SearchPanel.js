import React from 'react';

class SearchPanel extends React.Component {
    render() {
        return (
            <div className='search-panel'>
                <form autoComplete='off' onSubmit={this.props.getWeather}>
                    <input type="text" autoComplete='false' name='hidden' className='search-panel__hide-input' />
                    <input type='text' name='city' placeholder='City...' />
                    <button>Get weather</button>
                </form>
            </div>
        );
    }
}

export default SearchPanel;