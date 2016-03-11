import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }
    }

    render() {
        return this.state.editing ? this.renderEdit() : this.renderNote();
    }

    renderEdit = () => {
        return (
            <div>
            <input type="text"
                ref={ (e) => e ? e.selectionStart = this.props.task.length : null }
                autoFocus={true}
                defaultValue={this.props.task}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter} />
            <button onClick={this.props.onDelete} className="delete-note">X</button>
            </div>
        );
    };

    renderNote = () => {
        return(
            <div>
                <span onClick={this.edit} className="task">{this.props.task}</span>
                <button onClick={this.props.onDelete} className="delete-note">X</button>
            </div>
        );
    };

    edit = () => {
        this.setState({
            editing: true
        });
    };

    checkEnter = (e) => {
        if(e.key === 'Enter') {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        const value = e.target.value;
        if(this.props.onEdit) {
            this.props.onEdit(value);

            this.setState({
                editing: false
            })
        }
    };
}
