import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    getStyle = () => {
        const completed = this.props.todo.completed

        const dec = completed ? 'line-through' : 'none'

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: dec
        }
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
    <p>
        <input type='checkBox' onChange={this.props.toggleComplete.bind(this, id)} />
        {title}
    </p>
            </div>
        )
    }
}

// difine propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem