import {
  MoreHoriz,
  Bed,
  Place,
  AttachMoney,
  Attractions,
  LocalCafe,
  Restaurant,
  Flight,
  TwoWheeler,
  Train,
} from '@mui/icons-material'

export const type = {
  ACCOMMODATION: {
    label: 'Accommodation',
    value: 0,
  },
  RESTAURANT: {label:'Restaurant', value: 1},
  FLIGHT: {label: 'Flight', value: 2},
  TRAIN: {label: 'Train', value: 3},
  CAFES: {label: 'Cafes', value: 4},
  ATTRACTION: {label: 'Attraction', value: 5},
  MOTOBIKE: {label: 'Motobike', value: 6},
}

const unit = {
  NIGHT: 'night',
}

export const getIcon = ({ serviceType, m, s, c }) => {
  const style = { margin: m, fontSize: s }
  if (c) style.color = c
  let _icon
  switch (serviceType) {
    case type.ACCOMMODATION:
      _icon = <Bed sx={style} />
      break
    case type.ATTRACTION:
      _icon = <Attractions sx={style} />
      break
    case type.CAFES:
      _icon = <LocalCafe sx={style} />
      break
    case type.FLIGHT:
      _icon = <Flight sx={style} />
      break
    case type.MOTOBIKE:
      _icon = <TwoWheeler sx={style} />
      break
    case type.RESTAURANT:
      _icon = <Restaurant sx={style} />
      break
    case type.TRAIN:
      _icon = <Train sx={style} />
      break
    default:
      break
  }
  return _icon
}

const service = {
  id: 1,
  name: 'Homestay DaLat Mong Mo',
  location: {
    address: '43 Doi Nui',
    province: 'Da Lat',
    country: 'Vietnam',
  },
  rating: 3,
  type: type.ACCOMMODATION,
  price: {
    from: 100,
    to: 200,
    unit: unit.NIGHT,
  },
  images: [
    'https://homestay.review/wp-content/uploads/2018/11/Ngoi-nha-nam-tren-mat-ho-vo-cung-tho-mong-1024x683.png',
    'http://homestay3mien.com/wp-content/uploads/2019/07/Pour-homestay-6.jpg',
    'https://cdn.vietnammoi.vn/stores/news_dataimages/anhttl/012017/03/16/1802_home_of_dreamer_24.jpg',
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus lectus, tincidunt vitae felis varius, dignissim rutrum dui. Nunc massa magna, accumsan ut turpis id, laoreet ultrices odio.',
}

export default service
