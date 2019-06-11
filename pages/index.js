import dynamic from 'next/dynamic';

const Container = dynamic(() => import('../components/kit/container'), {
    loading: () => 'Loading'
});
const Card = dynamic(() => import('../components/kit/card'));

function Home() {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
        </Container>
    );
};

export default Home;