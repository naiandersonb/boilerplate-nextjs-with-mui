"use client";

import { Description } from "@/components/Description";
import { useDevice } from "@/hooks/use-device";
import { Option } from "@/types/option";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Address } from "./Address";
import { DoctorInfo } from "./DoctorInfo";
import { SelectLocale } from "./SelectLocale";

export const DoctorCard = () => {
  const [address, setAddress] = useState<Option>();
  const { isMobile } = useDevice();
  const addressMock: Option[] = [
    { label: "Rua Clodmir Cardoso, Centro, 1234, Caxias, MA", value: "1" },
    { label: "Rua Duque de Caxias, Nova Caxias, 1234, Caxias, MA", value: "2" },
  ];

  const handleSelectAddress = (addressId: string) => {
    const findAddress = addressMock.find((add) => add.value === addressId);
    if (findAddress) setAddress(findAddress);
  };

  return (
    <Card sx={{ border: "none" }}>
      <CardContent>
        <Stack
          direction={{ base: "column", md: "row" }}
          divider={
            <Divider
              orientation={isMobile ? "horizontal" : "vertical"}
              flexItem
            />
          }
        >
          <Stack
            spacing={{ xs: 2, md: 3 }}
            sx={{
              flex: 1,
              minHeight: "100px",
              padding: { md: 2 },
              paddingY: { xs: 2, md: 2 },
            }}
          >
            <DoctorInfo />

            <Description text="Possui graduação em Medicina pela Universidade Federal do Rio Grande do Norte (2004). Realizou Residência Médica em Dermatologia na Irmandade Santa Casa de Misericórdia de São Paulo (2005-2008). Tem experiência e atuação em Medicina, com ênfase na especialidade de Clínica Médica, Dermatologia e na subespecialidade de Cirurgia Dermatológica, Cosmiatria e Cabelos. Atualmente é professor efetivo da disciplina de Dermatologia da Universidade Federal do Piauí e preceptor de residência médica de dermatologia do HU. Ministra diversas palestras no congresso Brasileiro de Dermatologia e no Congresso Brasileiro de Cirurgia Dermatologica. Possui Mestrado em Ciencias e Saude, com ênfase em Dermatologia, cujo tema foi quelóides e cicatrizes hipertróficas, pela Universidade Federal do Piauí." />

            <Address addressList={addressMock} />
            <Typography variant="h6">R$350,00</Typography>
          </Stack>
          <Box sx={{ flex: 1, padding: { md: 2 }, paddingY: { xs: 2, md: 2 } }}>
            <SelectLocale
              localeList={addressMock}
              onChange={handleSelectAddress}
              value={address?.value}
            />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
