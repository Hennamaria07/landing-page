
import { SkeletonOne } from './components/Layout';


export const navData = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: "About",
        href: '#about'
    },
    {
        title: "Services",
        href: '#services'
    },
    {
        title: "Testimonials",
        href: '#testimonials'
    },
    {
        title: "Contact",
        href: '#contact'
    }
]

export const images = [
    'https://plus.unsplash.com/premium_photo-1683133269843-09a177048cef?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1672039297160-2b0b5143a510?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

export const serviceData = [
    {
        title: "Spa Area",
        description: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
        link: '/'
    },
    {
        title: "Changing Rooms",
        description: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
        link: '/'
    },
    {
        title: "Free Lessons",
        description: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
        link: '/'
    },
    {
        title: "Free Rugs",
        description: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
        link: '/'
    }
]

export const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  export const members = [
    {
        img: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ='
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/1398/2ffd/fdadcd413286d1957a6b477eab57205f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fyv-UpKabPLzCwmnRfnS4Zkd8w6HhY054t~-uy4bp89gyGLodfdzGO0xJ9ugFyJ7tqdnnTII~I84qNrLl96suXrsHDy~ohOCkJy7DJbwkSSD6TqQP5XQdkCq~g2XJ65KF-4qLW9A2jAy2NpUaXtaRedv9ycC9I2Cz6t-RAhmysAgimS-twjvZVgEAAR7KjE8aiQvsRd832rtVc8-e89Og0Udr-QVrXtOSj-cP~tAHowQcj18vyJhQpzFfst4ct9xgxIhS5V0s3eAdwSjPTqtDRJlfOtBsdrVuc174Joe~s~YIE75rZ~tSTGEfQ~zm5ARlCd79p7wpP-gYKg2qEx-9g__'
    },
    {
        img: 'https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-600nw-1667439898.jpg'
    },
    {
        img: 'https://www.mensjournal.com/.image/t_share/MTk2MTM2NTcwNDMxMjg0NzQx/man-taking-selfie.jpg'
    },
    {
        img: 'https://www.heysaturday.co/wp-content/uploads/2016/11/best-dating-profile-photos-women-b.jpg'
    },
    {
        img: 'https://static.vecteezy.com/system/resources/thumbnails/047/462/770/small_2x/positive-man-on-clean-background-photo.jpg'
    }
]

export const cards = [
    {
      id: 1,
      content: <SkeletonOne 
      name={'Roronoa Zoro'}
      des={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laboriosam animi eveniet vel, consectetur illo dolorum fugit delectus pariatur nobis aliquid impedit accusantium molestiae exercitationem molestias fuga fugiat eos quae.'}/>,
      className: "md:col-span-2",
      thumbnail:
        "https://static.vecteezy.com/system/resources/thumbnails/047/462/770/small_2x/positive-man-on-clean-background-photo.jpg",
    },
    {
      id: 2,
      content: <SkeletonOne 
      name={'Nami San'}
      des={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laboriosam animi eveniet vel, consectetur illo dolorum fugit delectus pariatur nobis aliquid impedit accusantium molestiae exercitationem molestias fuga fugiat eos quae.'}/>,
      className: "col-span-1",
      thumbnail:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      id: 3,
      content: <SkeletonOne 
      name={'Vinsmoke Sanji'}
      des={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laboriosam animi eveniet vel, consectetur illo dolorum fugit delectus pariatur nobis aliquid impedit accusantium molestiae exercitationem molestias fuga fugiat eos quae.'}/>,
      className: "col-span-1",
      thumbnail:
        "https://www.mensjournal.com/.image/t_share/MTk2MTM2NTcwNDMxMjg0NzQx/man-taking-selfie.jpg",
    },
    {
      id: 4,
      content: <SkeletonOne 
      name={'Nico Robin'}
      des={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laboriosam animi eveniet vel, consectetur illo dolorum fugit delectus pariatur nobis aliquid impedit accusantium molestiae exercitationem molestias fuga fugiat eos quae.'}/>,
      className: "md:col-span-2",
      thumbnail:
        "https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-600nw-1667439898.jpg",
    },
  ];