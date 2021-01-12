import React from 'react';
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  SearchComponent,
  ListBooksComponent
} from '../../components';
import { IBookListData } from "../../types"
import { useBookService } from "../../utils/APIUtils"
const Buku = () => {
  const [book, setBook] = React.useState<IBookListData>()
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
          <div className='row'>
            {book?.data.map((item) => (
              <ListBooksComponent
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                BookCategory={item.BookCategory}
                User={item.User}
              />
            ))}
          </div>

          {/* PAGINATION START */}
          <nav style={{ marginBottom: '10%' }}>
            <ul className='pagination'>
              <li>
                <a href={'/'} aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                </a>
              </li>
              <li>
                <a href={'/'}>1</a>
              </li>
              <li>
                <a href={'/'}>2</a>
              </li>
              <li>
                <a href={'/'}>3</a>
              </li>
              <li>
                <a href={'/'}>4</a>
              </li>
              <li>
                <a href={'/'}>5</a>
              </li>
              <li>
                <a href={'/'} aria-label='Next'>
                  <span aria-hidden='true'>&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* PAGINATION END */}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Buku;
