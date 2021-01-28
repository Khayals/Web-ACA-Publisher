import React, {useState} from 'react';
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  SearchComponent,
  ListBooksComponent
} from '../../components';
import { List } from "antd"
import { IBookListData } from "../../types"
import { useBookService } from "../../utils/APIUtils"
const Buku = () => {
  const [book, setBook] = useState<IBookListData>()
  const { getAllBooks } = useBookService()

  React.useEffect(() => {
    const fetchBook = async () => {
      try {
        const result = await getAllBooks()
        setBook(result.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBook()
  }, [getAllBooks])

  return (
    <div className='wrapper kode-header-class-3'>
      <HeaderComponent />
      <BannerComponent />
      <SearchComponent />
      <div className='kode-content'>
        <div className='container'>
          <div className='kode-product-filter'></div>
            <List
              grid={{
                gutter: 4,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
              style={{marginBottom: "3%"}}
              pagination={{pageSize: 8}}
              size="large"
              dataSource={book?.data}
              renderItem={item => (
                  <ListBooksComponent
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    BookCategory={item.BookCategory}
                    User={item.User}
                    photo={item.photo}
                  />
              )}
            />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Buku;
