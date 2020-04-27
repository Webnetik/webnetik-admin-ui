function Loader(props) {
    if(props.loading) {
        return(
            <div>Loading...</div>
        );
    } else {
        return(children);
    }

}

export default Loader;
