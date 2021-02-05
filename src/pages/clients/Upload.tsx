import React, {useState, useEffect} from 'react';
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  SearchComponent,
} from '../../components';
import { Typography, Collapse, Steps, Button, message, Upload as AntdUpload, Icon, Input, Progress, Popconfirm, Card, Row, Col, Modal, List} from "antd"
import { useDriveService } from "../../utils/APIUtils"


const Upload = () => {
    const [item, setItem] = useState<string>("")

    const [isUploadModalVisible, setIsUploadModalVisible] = useState<boolean>(false)

    const [isModalVisibleAntologi, setIsModalVisibleAntologi] = useState<boolean>(false)
    const [isModalVisibleBerbayar, setIsModalVisibleBerbayar] = useState<boolean>(false)
    const [isModalVisibleSeleksi, setIsModalVisibleSeleksi] = useState<boolean>(false)

    const [folderIdAntologi, setFolderIdAntologi] = useState<string>("1HiWqwX8a4Blgidu3TKyIR2dzCIM1VDry")
    const [folderIdBerbayar, setFolderIdBerbayar] = useState<string>("1RqLZHdwp5qLI7uZm4jo9XKX6rt_czGhR")
    const [folderIdSeleksi, setFolderIdSeleksi] = useState<string>("1bddFPUXRANV-OVvJCCP32I8erkfvuXmO")
    
    const [progressBar, setProgressBar] = useState<boolean>(false)

    const { getUploadDrive } = useDriveService()

    const handleUpload = (event: any) => {
      setItem(event.target.files[0])
    }

    const HandleItemAntologi = async () => {
        setFolderIdAntologi("1HiWqwX8a4Blgidu3TKyIR2dzCIM1VDry")
        console.log(folderIdAntologi)
          if(folderIdAntologi) {
            const formData = new FormData()
            formData.append('item', item)
            formData.append("folderId", folderIdAntologi)
            
            if(item === "") {
              message.error("Harap memasukkan file terlebih dahulu!")
            } else {
              try{
                setProgressBar(true)
                const response = await getUploadDrive(formData)
                setProgressBar(false)
                if(response.ok){
                  message.success("Terima Kasih, submit naskah berhasil")
                } else {
                  message.error("Mohon maaf sistem sedang bermasalah")
                }
              } catch(error) {
                message.error(error)
              }
                
            }
          }  
    }

    const handleItemBerbayar = async () => {
      setFolderIdBerbayar("1RqLZHdwp5qLI7uZm4jo9XKX6rt_czGhR")
      console.log(folderIdBerbayar)
      if(folderIdBerbayar) {
        const formData = new FormData()
        formData.append('item', item)
        formData.append("folderId", folderIdBerbayar)
        
        if(item === "") {
          message.error("Harap memasukkan file terlebih dahulu!")
        } else {
          try{
            setProgressBar(true)
            const response = await getUploadDrive(formData)
            setProgressBar(false)
            if(response.ok){
              message.success("Terima Kasih, submit naskah berhasil")
            } else {
              message.error("Mohon maaf sistem sedang bermasalah")
            }
          } catch(error) {
            console.error(error)
          }
        }
      }
    }

    const handleItemSeleksi = async () => {
      setFolderIdSeleksi("1bddFPUXRANV-OVvJCCP32I8erkfvuXmO")
      console.log(folderIdSeleksi)
      if(folderIdSeleksi) {
        const formData = new FormData()
        formData.append('item', item)
        formData.append("folderId", folderIdSeleksi)
        if(item === "") {
          message.error("Harap memasukkan file terlebih dahulu!")
        } else {
          try {
            setProgressBar(true)
            const response = await getUploadDrive(formData)
            setProgressBar(false)
            if(response.ok){
              message.success("Terima Kasih, submit naskah berhasil")
            } else {
              message.error("Mohon maaf sistem sedang bermasalah")
            }
          } catch(error) {
            console.error(error)
          }
         
        }
      }
    }

    const showOpenModalAntologi = () => {
      setIsModalVisibleAntologi(true)
    }
    const showOpenModalBerbayar = () => {
      setIsModalVisibleBerbayar(true)
    }
    const showOpenModalSeleksi = () => {
      setIsModalVisibleSeleksi(true)
    }
    const showUploadOpenModal = () => {
      setIsUploadModalVisible(true)
    }

    const handleModalAntologi = () => {
      setIsModalVisibleAntologi(prev => !prev)
    }
    const handleModalBerbayar = () => {
      setIsModalVisibleBerbayar(prev => !prev)
    }
    const handleModalSeleksi = () => {
      setIsModalVisibleSeleksi(prev => !prev)
    }
    const handleUploadModal = () => {
      setIsUploadModalVisible(prev => !prev)
    }


    return (
    <div className='wrapper kode-header-class-3'>
      <HeaderComponent />
      <BannerComponent />
      <SearchComponent />
      <div className='kode-content'>
        <div className='container'>
          <div className='kode-product-filter'></div>
            <Typography.Title level={3}>Paket Antologi</Typography.Title>
            <Collapse style={{marginBottom: "3%"}}>
                <Collapse.Panel header="Paket Nebula, Antologi For Androcenta" key="1">
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Nebula adalah paket Antologi dari Androcenta</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                      <li>Cover (2 pilihan)</li>
                      <li>Layout</li>
                      <li>Bukti Terbit 1 eks (untuk Aurora)</li>
                      <li>Royalti 5k/eks</li>
                      <li>Banner promotion</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalAntologi}>Pilih Paket</Button>
                    <Modal
                      title="Paket Nebula, Syarat & Ketentuan"
                      visible={isModalVisibleAntologi}
                      onOk={handleModalAntologi}
                      onCancel={handleModalAntologi}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Naskah diketik rapi dalam format MS. Word.</li>
                        <li>Ukuran kertas A5, margin standar, ukuran font 12 pt, jenis font Time News Roman, spasi 1,5.</li>
                        <li>Panjang naskah maksimal 200 halaman, jika lebih 200 halaman, bisa dibicarakan dulu dengan kami.</li>
                        <li>Naskah asli bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Naskah dilengkapi kata pengantar dan/atau ucapan terima kasih.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdAntologi) && <Progress percent={80} /> }
                        <Button onClick={HandleItemAntologi} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                  </Card>  
                </Collapse.Panel>
                <Collapse.Panel header="Paket Planet, Antologi" key="2" >
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Planet adalah paket Antologi dari Androcenta</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                        <li>Cover (2 pilihan)</li>
                        <li>Layout</li>
                        <li>Editing</li>
                        <li>ISBN</li>
                        <li>Bukti Terbit 1 eks (untuk PJ)</li>
                        <li>Royalti 100k (35 eks) jika lebih kita diskusikan</li>
                        <li>Banner promotion</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalAntologi}>Pilih Paket</Button>
                    <Modal
                      title="Paket Planet, Syarat & Ketentuan"
                      visible={isModalVisibleAntologi}
                      onOk={handleModalAntologi}
                      onCancel={handleModalAntologi}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Naskah diketik rapi dalam format MS. Word.</li>
                        <li>Ukuran kertas A5, margin standar, ukuran font 12 pt, jenis font Time News Roman, spasi 1,5.</li>
                        <li>Panjang naskah maksimal 200 halaman, jika lebih 200 halaman, bisa dibicarakan dulu dengan kami.</li>
                        <li>Naskah asli bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Naskah dilengkapi kata pengantar dan/atau ucapan terima kasih.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdAntologi) && <Progress percent={80} /> }
                        <Button onClick={HandleItemAntologi} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                  </Card>
                </Collapse.Panel>
                <Collapse.Panel header="Paket Orion, Pinangan" key="3">    
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Origin adalah paket Pinangan dari Androcenta</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                        <li>Cover (2 pilihan)</li>
                        <li>Layout</li>
                        <li>Editing</li>
                        <li>Proofreading</li>
                        <li>ISBN</li>
                        <li>Bukti Terbit 1 eks</li>
                        <li>Royalti (Diskusi dengan penulis)</li>
                        <li>Konsultasi Naskah</li>
                        <li>Banner promotion</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalAntologi}>Pilih Paket</Button>
                    <Modal
                      title="Paket Planet, Syarat & Ketentuan"
                      visible={isModalVisibleAntologi}
                      onOk={handleModalAntologi}
                      onCancel={handleModalAntologi}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Naskah diketik rapi dalam format MS. Word.</li>
                        <li>Ukuran kertas A5, margin standar, ukuran font 12 pt, jenis font Time News Roman, spasi 1,5.</li>
                        <li>Panjang naskah maksimal 200 halaman, jika lebih 200 halaman, bisa dibicarakan dulu dengan kami.</li>
                        <li>Naskah asli bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Naskah dilengkapi kata pengantar dan/atau ucapan terima kasih.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdAntologi) && <Progress percent={80} /> }
                        <Button onClick={HandleItemAntologi} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                </Card>
                </Collapse.Panel>
            </Collapse>

            <Typography.Title level={4}>Paket Berbayar</Typography.Title>
            <Collapse style={{marginBottom: "3%"}}>
                <Collapse.Panel header="Paket komet, 200k" key="1">
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Komet adalah paket dari Androcenta</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                        <li>Cover (2 pilihan)</li>
                        <li>Layout</li>
                        <li>Editing</li>
                        <li>Proofreading</li>
                        <li>ISBN</li>
                        <li>Bukti Terbit 2 eks</li>
                        <li>Royalti 10k/eks</li>
                        <li>Konsultasi Naskah</li>
                        <li>Banner promotion</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalBerbayar}>Pilih Paket</Button>
                    <Modal
                      title="Paket Komet, Syarat & Ketentuan"
                      visible={isModalVisibleBerbayar}
                      onOk={handleModalBerbayar}
                      onCancel={handleModalBerbayar}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Naskah diketik rapi dalam format MS. Word.</li>
                        <li>Ukuran kertas A5, margin standar, ukurang font 12 pt, jenis font Time New Roman, spasi 1,5.</li>
                        <li>Panjang naskah maksimal 200 halaman. Jika lebih dari 200 halaman, maka akan dikenakan biaya tambahan sebesar 75-0 rupiah/halaman (PAKET KOMET), 100 rupiah/halaman(PAKET BULAN), 1.350 rupiah/halaman (PAKET METEOR).</li>
                        <li>Naskah asli bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Sertakan sinopsis, kata pengantar dan/atau ucapan terima kasih serta bionarasi dan nomor yang bisa dihubungi.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdBerbayar) && <Progress percent={80} /> }
                        <Button onClick={handleItemBerbayar} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                  </Card>
                </Collapse.Panel>
                <Collapse.Panel header="Paket Bulan, 300k" key="2" >
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Bulan adalah paket dari Androcenta</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                        <li>Cover (2 pilihan)</li>
                        <li>Layout</li>
                        <li>Editing</li>
                        <li>Proofreading</li>
                        <li>ISBN</li>
                        <li>Bukti Terbit 5 eks</li>
                        <li>Royalti 10k/eks</li>
                        <li>Konsultasi Naskah</li>
                        <li>Banner promotion</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalBerbayar}>Pilih Paket</Button>
                    <Modal
                      title="Paket Bulan, Syarat & Ketentuan"
                      visible={isModalVisibleBerbayar}
                      onOk={handleModalBerbayar}
                      onCancel={handleModalBerbayar}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Naskah diketik rapi dalam format MS. Word.</li>
                        <li>Ukuran kertas A5, margin standar, ukurang font 12 pt, jenis font Time New Roman, spasi 1,5.</li>
                        <li>Panjang naskah maksimal 200 halaman. Jika lebih dari 200 halaman, maka akan dikenakan biaya tambahan sebesar 75-0 rupiah/halaman (PAKET KOMET), 100 rupiah/halaman(PAKET BULAN), 1.350 rupiah/halaman (PAKET METEOR).</li>
                        <li>Naskah asli bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Sertakan sinopsis, kata pengantar dan/atau ucapan terima kasih serta bionarasi dan nomor yang bisa dihubungi.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdBerbayar) && <Progress percent={80} /> }
                        <Button onClick={handleItemBerbayar} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                  </Card>
                </Collapse.Panel>
                <Collapse.Panel header="Paket Meteor, 400k" key="3" >
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Meteor adalah paket dari Androcenta</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                        <li>Cover (2 pilihan)</li>
                        <li>Layout</li>
                        <li>Editing</li>
                        <li>Proofreading</li>
                        <li>ISBN</li>
                        <li>Bukti Terbit 8 eks</li>
                        <li>Royalti 10k/eks</li>
                        <li>Konsultasi Naskah</li>
                        <li>Banner promotion</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalBerbayar}>Pilih Paket</Button>
                    <Modal
                      title="Paket Meteor, Syarat & Ketentuan"
                      visible={isModalVisibleBerbayar}
                      onOk={handleModalBerbayar}
                      onCancel={handleModalBerbayar}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Naskah diketik rapi dalam format MS. Word.</li>
                        <li>Ukuran kertas A5, margin standar, ukurang font 12 pt, jenis font Time New Roman, spasi 1,5.</li>
                        <li>Panjang naskah maksimal 200 halaman. Jika lebih dari 200 halaman, maka akan dikenakan biaya tambahan sebesar 75-0 rupiah/halaman (PAKET KOMET), 100 rupiah/halaman(PAKET BULAN), 1.350 rupiah/halaman (PAKET METEOR).</li>
                        <li>Naskah asli bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Sertakan sinopsis, kata pengantar dan/atau ucapan terima kasih serta bionarasi dan nomor yang bisa dihubungi.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdBerbayar) && <Progress percent={80} /> }
                        <Button onClick={handleItemBerbayar} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                  </Card>
                </Collapse.Panel>
            </Collapse>

            <Typography.Title level={4}>Paket Seleksi & Non Seleksi</Typography.Title>
            <Collapse style={{marginBottom: "3%"}}>
                <Collapse.Panel header="Paket Bintang, Seleksi" key="1">
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Bintang adalah paket Seleksi Androcenta</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                        <li>Cover (2 pilihan)</li>
                        <li>Layout</li>
                        <li>Editing</li>
                        <li>Proofreading</li>
                        <li>ISBN</li>
                        <li>Bukti Terbit 2 eks</li>
                        <li>Royalti 10k/eks</li>
                        <li>Konsultasi Naskah</li>
                        <li>Banner promotion</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalSeleksi}>Pilih Paket</Button>
                    <Modal
                      title="Paket Bintang, Syarat & Ketentuan"
                      visible={isModalVisibleSeleksi}
                      onOk={handleModalSeleksi}
                      onCancel={handleModalSeleksi}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Naskah diketik rapi dalam format MS. Word.</li>
                        <li>Ukuran kertas A5, margin standar, ukurang font 12 pt, jenis font Time New Roman, spasi 1,5.</li>
                        <li>Panjang naskah maksimal 200 halaman. Jika lebih dari 200 halaman, bisa dibicarakan dulu dengan kami.</li>
                        <li>Naskah asli bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Sebaiknya sebelum dikirim, naskah harus di revisi terlebih dahulu oleh sahabat, karena akan mempengaruhi proses lolos atau tidaknya naskah sahabat.</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Naskah dilengakapi dengan sinopsis bukan blurb (yang biasa ditulis dengan cover belakang), keunggulan naskah, kata pengatar dan/atau ucapan terima kasih serta bionarasi yang dilengkapi dengan kontak dan media sosial.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdSeleksi) && <Progress percent={80} /> }
                        <Button onClick={handleItemSeleksi} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                  </Card>
                </Collapse.Panel>
                <Collapse.Panel header="Paket Asteroid, Wattpad" key="2" >
                  <Card hoverable style={{ marginBottom: 20 }}>
                    <Typography.Text>Paket Asteroid adalah paket Wattpad</Typography.Text>
                    <ul style={{padding: 0, marginTop: 10}}>
                        <li>Cover (2 pilihan)</li>
                        <li>Layouting</li>
                        <li>Editing</li>
                        <li>Proofreading</li>
                        <li>ISBN</li>
                        <li>Bukti Terbit 1 eks</li>
                        <li>Royalti 10k/eks</li>
                        <li>Konsultasi Naskah</li>
                    </ul>
                    <Button type="primary" style={{width: "100%"}} onClick={showOpenModalSeleksi}>Pilih Paket</Button>
                    <Modal
                      title="Paket Asteroid, Syarat & Ketentuan"
                      visible={isModalVisibleSeleksi}
                      onOk={handleModalSeleksi}
                      onCancel={handleModalSeleksi}
                    >
                      <>
                      <ol style={{padding: 0}}>
                        <li>Cerita harus sudah tamat di wattpad.</li>
                        <li>Menggunakan tagar #androcentamencarinaskah</li>
                        <li>Naskah asli, bukan plagiat.</li>
                        <li>Naskah tidak sedang diikutsertakan dalam lomba dan/atau sedang dikirim ke penerbit lain.</li>
                        <li>Naskah belum pernah terbit dalam bentuk fisik.</li>
                        <li>Genre dan tema bebas, asal tidak mengandung SARA dan pormogrofi (cerita dewasa tidak sama dengan pornografi atau cerita vulgar)</li>
                        <li>Boleh menggunakan bahasa asing dan/atau daerah tapi harus menggunakan huruf italic.</li>
                        <li>Setelah naskah rapi, naskah dikirim pada form upload di website androcenta publisher.</li>
                      </ol>
                      <Button type="primary" style={{width: "100%"}} onClick={showUploadOpenModal} >Kirim Naskah Anda</Button>
                      </>
                    </Modal>
                    <Modal
                      title="Kirim Naskah - Format Penulisan"
                      visible={isUploadModalVisible}
                      onOk={handleUploadModal}
                      onCancel={handleUploadModal}
                    >
                      <Typography.Text style={{fontWeight: "bold"}}>*Bentuk Antologi: JudulNaskah_NamaPaket_Komunitas/NamaEvent</Typography.Text> <br/><br/>
                      <Typography.Text style={{fontWeight: "bold"}}>*Bentuk Novel Solo: NamaPenulis_JudulBuku_Paket</Typography.Text> <br/><br/>
                      <Input type="file" name="file" onChange={handleUpload} style={{border: "none", marginLeft: "-10px"}} /> 
                      {(progressBar && folderIdSeleksi) && <Progress percent={80} /> }
                        <Button onClick={handleItemSeleksi} type="primary" style={{width: "100%", marginTop: "3%"}}>Submit</Button>  
                    </Modal>
                  </Card>
                </Collapse.Panel>
            </Collapse>
        </div>
      </div>
      <FooterComponent />
    </div>
    )
}

export default Upload
