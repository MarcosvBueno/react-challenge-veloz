import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ContainerHome,Container } from "./style";
import CardAnimal from "../../components/CardAnimal";
import Filters from "../../components/Filters";
import PosterAnimal from "../../components/PosterAnimal";
import { FetchApi } from "../../service";
import { petProps } from "../../types";

function HomePage() {
  const [data, setData] = useState<petProps[]>([]);

  useEffect(() => {
    FetchApi().then((response) => {
      setData(response);
    });
  }, []);

  const applySort = (sortFunction: (prevData: petProps[]) => petProps[]) => {
    setData((prevData) => sortFunction(prevData));
  };

  return (
    <Container>
      <ContainerHome>
        <PosterAnimal />
        <Filters applySort={applySort} initialActiveFilter={"id"} />
        {data.map((item: petProps) => (
          <CardAnimal key={item.id} {...item} />
        ))}
      </ContainerHome>
    </Container>
  );
}

export default HomePage;
