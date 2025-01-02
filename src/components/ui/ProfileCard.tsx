import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ProfileCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className=" group/card 
       w-auto sm:w-[30rem] h-auto border-customColor-primary
       hover:shadow-2xl"
      >
        <div className="flex flex-col justify-center items-center gap-4 relative overflow-hidden">
          <CardItem>
            <img src="/src/assets/playerCard_bg.png" alt="card background" />
          </CardItem>

          <CardItem className="absolute top-0 left-0">
            <img
              src="/src/assets/playerCard_bgBorder.png"
              alt="card background"
            />
          </CardItem>

          <CardItem className="absolute bottom-0 left-0" translateZ="100">
            <img
              src="src/assets/NICOLAS_VectorArt.png"
              alt="card background"
              className="group-hover/card:shadow-xl"
            />
          </CardItem>
          <CardItem className="absolute bottom-0 left-0">
            <img src="/src/assets/gradientShadow.png" alt="card background" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
