export const type = {
  ACCOMMODATION: 'Accommodation',
  RESTAURANT: 'Restaurant',
  FLIGHT: 'Flight',
  TRAIN: 'Train',
  CAFES: 'Cafes',
  ATTRACTION: 'Attraction',
  MOTOBIKE: 'Motobike',
}

const unit = {
  NIGHT: 'night',
}

const service = {
  id: 1,
  name: 'Homestay DaLat Mong Mo',
  location: {
    address: '43 Doi Nui',
    province: 'Da Lat',
    country: 'Vietnam',
  },
  type: type.ACCOMMODATION,
  price: {
    from: 100,
    to: 200,
    unit: unit.NIGHT,
  },
  image: [
    'https://homestay.review/wp-content/uploads/2018/11/Ngoi-nha-nam-tren-mat-ho-vo-cung-tho-mong-1024x683.png',
    'http://homestay3mien.com/wp-content/uploads/2019/07/Pour-homestay-6.jpg',
    'https://cdn.vietnammoi.vn/stores/news_dataimages/anhttl/012017/03/16/1802_home_of_dreamer_24.jpg',
  ],
  url: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiikt6y55j1AhVDQd4KHcJnDyoQPAgI',
}

export default service
