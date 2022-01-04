import service from './service'

const type = {
  TRAVELLER: 'Traveller',
  SERVICE_PROVIDER: 'Service Provider',
}

const user = {
  username: 'pinetree',
  name: 'Cay Thong',
  type: type.SERVICE_PROVIDER,
  services: [service, service, service],
  avatar:
    'https://i.pinimg.com/originals/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg',
}

export default user
