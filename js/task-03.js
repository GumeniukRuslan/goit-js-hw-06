const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const makeGallery = images => {
  return images.map(img => {
    const item = document.createElement('li')
    const imgContent = document.createElement('img')
    imgContent.src = img.url;
    imgContent.alt = img.alt;
    imgContent.width = 300;
    imgContent.height = 190;     
    imgContent.style.boxShadow = 'rgba(149, 157, 165, 1.5) 0px 12px 24px';
    item.append(imgContent);

    return item;
  })
};

const imagesToAppend = makeGallery(images);
gallery.append(...imagesToAppend)

gallery.style.listStyle = 'none';
gallery.style.display = 'flex';
gallery.style.justifyContent = 'space-around';
gallery.style.padding = 0;

