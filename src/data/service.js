const type = {
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
    'http://streaming1.danviet.vn/upload/3-2019/images/2019-08-04/home-1564907015-width1080height1350.jpg',
    'http://homestay3mien.com/wp-content/uploads/2019/07/Pour-homestay-6.jpg',
    'https://cdn.vietnammoi.vn/stores/news_dataimages/anhttl/012017/03/16/1802_home_of_dreamer_24.jpg',
  ],
}

export default service
