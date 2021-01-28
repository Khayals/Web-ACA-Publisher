import React, {useState} from 'react';
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  SearchComponent,
  ListBooksComponent
} from '../../components';
import { List, Pagination } from "antd"
import { IBookListData } from "../../types"
import { useBookService } from "../../utils/APIUtils"

const Upload = () => {
    return (
    <div className='wrapper kode-header-class-3'>
      <HeaderComponent />
      <BannerComponent />
      <SearchComponent />
      <div className='kode-content'>
        <div className='container'>
          <div className='kode-product-filter'></div>
            <h1>Hallo Bradawww...</h1>
        </div>
      </div>
      <FooterComponent />
    </div>
    )
}

export default Upload
