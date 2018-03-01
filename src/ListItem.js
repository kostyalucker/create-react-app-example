import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div>
                <p>{comics.data.results[0].title}</p>
                <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt=""/>
            </div>
        );
    }
}

export default ListItem;