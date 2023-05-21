import PropTypes from 'prop-types';

export const Filter = ({filtration}) => {
    return <div>
        <p>Find contact by name</p>
        <input name='filter' type="text" onChange={filtration} />
    </div>
}

Filter.propTypes = {
    filtration: PropTypes.func
}