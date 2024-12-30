import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ProfileCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gradient-to-t from-customColor-dark to-customColor-primary group/card 
       w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-customColor-primary border-2
       hover:shadow-2xl"
      >
        <CardItem as="h1" translateZ="60" className=" bg-black">
          Profile
        </CardItem>

        <div className="flex flex-col justify-center items-center gap-4">
          <CardItem translateZ="100">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-60 object-cover rounded-full group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="60"
            className="px-4 py-2 rounded-xl text-center"
          >
            <h1 className="text-lg">John Abiel Nicolas</h1>
            <p className="text-sm">Aspiring Game Developer</p>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
