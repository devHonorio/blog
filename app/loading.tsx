import tw from "tailwind-styled-components";

export default function Loading() {
  return (
    <Container>
      <DotContainer>
        <Dot />
        <Dot className="animate-delay-1" />
        <Dot className="animate-delay-2" />
      </DotContainer>
    </Container>
  );
}

const Container = tw.div`
fixed
top-0
left-0
h-screen
w-screen
bg-neutral-950/80
flex
justify-center
items-center
`;

const Dot = tw.div`
h-4
w-4
rounded-full
bg-gradient-to-tr
from-cyan-300
to-emerald-300
animate-bounce
`;

const DotContainer = tw.div`
border-2
border-emerald-300
flex
gap-2
p-2
rounded

`;
