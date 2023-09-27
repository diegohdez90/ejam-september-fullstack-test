import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Nav from '@/components/Nav'
import ProductDetail from '@/components/ProductDetail'
import Stepper from '@/components/Stepper'
import Title from '@/components/Title'

function mockupData() {
  return {
    productTitle: {
      occurrence: 'ONE TIME ONLY',
      offer: 'special price for'
    },
    productName: 'Clarifion Air Ionizer',
    smallName: 'Clarifion',
    score: 5,
    price: 180,
    discountedPrice: 84,
    amountInStock: 12,
    description: 'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.',
    thumbnail: '/thumbnail.svg',
    features: [
      {
        text: 'Negative Ion Technology may help with allergens',
        strong: 'help with allergens'
      },
      {
        text: 'Designed for air rejuvenation',
        strong: 'air rejuvenation'
      },
      {
        text: 'Perfect for every room in all types of places',
        strong: 'Perfect for every room'
      }
    ],
    isGuaranteed: true,
    promotion: {
      text: 'Save <percent> and get <amount> <product> for only <price> Each.',
      strong: {
        ['<percent>']: '53%',
        ['<amount>']: '6 extra',
        ['<product>']: 'Clarifion',
        ['<price>']: '$14'
      }
    },
    featuredComment: {
      user: 'Ken T.',
      score: 5,
      isVerified: true,
      content: '“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”',
      profileImg: '/profile.svg'
    }
  }
};


export default function Home()  {
  const data = mockupData();
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-between container mx-auto gap-12 my-4">
        <Nav />
        <Title
          title='Wait ! your order in progress.'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing '
        />
        <Stepper current={3} />
        <ProductDetail
          productTitle={data.productTitle}
          productName={data.productName}
          smallName={data.smallName}
          featuredComment={data.featuredComment}
          score={data.score}
          price={data.price}
          discountedPrice={data.discountedPrice}
          applyDiscountPrice={true}
          amountInStock={data.amountInStock}
          thumbnailImage={data.thumbnail}
          description={data.description}
          features={data.features}
          promotion={data.promotion}
          isGuaranteed={data.isGuaranteed}
        />
      </div>
      <Footer />
  </main>
  )
}
