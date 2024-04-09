/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {

        return (
            <section id="home">
                <div className="content">
                    {/* <p>ELC Coding Test...</p> */}
                    {
                        this.props.isLoading ?
                            <div>
                                <h5>Loading...</h5>
                            </div>
                            :
                            this.props.filterdProduct.length === 0 ?
                                <div>
                                    <h5>No Product Found</h5>
                                </div>
                                :
                                this.props.filterdProduct.map((product, i) => {
                                    return (
                                        <div className="card-outer" key={i}>
                                            <div className='card-inner'>
                                                <img src={`http://localhost:3030/${product.picture}`} alt={product.name} />
                                                <div className="container">
                                                    <div className='title'>
                                                        <h4><b>{product.name}</b></h4>
                                                    </div>
                                                    <div className='price'>
                                                        <p>$ {product.price}</p>
                                                    </div>
                                                    <div className='description'>
                                                        <p>{product.about}</p>
                                                    </div>
                                                    <div className='product_tags'>
                                                        {
                                                            product?.tags.map((tag) => (
                                                                <div className='tag' key={tag}>
                                                                    {tag}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                    }

                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;