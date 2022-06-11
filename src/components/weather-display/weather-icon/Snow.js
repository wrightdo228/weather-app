import PropTypes from 'prop-types';

const Snow = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M510.9 389.1l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V360c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zm-384 0l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V360c0-4.4-3.6-8-8-8H56c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16L4 432c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zm192 32l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V392c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zM108 320h296c59.6 0 108-48.5 108-108 0-57.3-44.9-104.3-101.3-107.8C397.2 61.8 358 32 312 32c-13.5 0-26.8 2.6-39.2 7.7C250.3 14.5 218.4 0 184 0 120 0 67.6 50.3 64.2 113.4 25.6 130.4 0 168.5 0 212c0 59.5 48.4 108 108 108zM94.4 153.7l20.7-4.8-2.7-24.9c-.2-1.3-.4-2.6-.4-4 0-39.7 32.3-72 72-72 25.2 0 48.2 13.1 61.4 35.1l13.3 22.1 21.1-14.9C289.4 83.6 300.5 80 312 80c28.6 0 52.4 21.7 55.3 50.4l2.2 21.6H404c33.1 0 60 26.9 60 60s-26.9 60-60 60H108c-33.1 0-60-26.9-60-60 0-28 19.1-52 46.4-58.3z" />
    </svg>
);

Snow.propTypes = {
    className: PropTypes.string,
};

Snow.defaultProps = {
    className: '',
};

export default Snow;
