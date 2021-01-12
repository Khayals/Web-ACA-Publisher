import React from 'react'
import { Rate } from "antd"
import { IDataApi } from "../types"
import { formatNumber, capitalizeFirstLetter } from "../constants/utils"
const ListBooks = (props: IDataApi) => {
    return (
        <>
            {/* PRODUCT GRID START */}
            <div className='col-md-3 col-sm-6'>
                <div className='best-seller-pro'>
                    <figure>
                        <img src='/images/book4.png' alt={props.title} />
                    </figure>
                    <div className='kode-text'>
                        <h3>{capitalizeFirstLetter(props.title)}</h3>
                    </div>
                    <div className='kode-caption'>
                        <h3>{capitalizeFirstLetter(props.BookCategory.name)}</h3>
                        {/* <div className='rating'> */}
                        <Rate disabled defaultValue={4} style={{ paddingBottom: 4 }} />
                        {/* </div> */}
                        <p>{capitalizeFirstLetter(props.User.name)}</p>
                        <p className='price'>Rp. {formatNumber(props.price)}</p>
                        <a href={'/'} className='add-to-cart'>
                            Beli Buku
                  </a>
                    </div>
                </div>
            </div>
            {/* PRODUCT GRID END */}
        </>
    )
}

export default ListBooks
