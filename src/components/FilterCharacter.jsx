import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "./Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AccessDenied from "./AccessDenied";

import React from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FilterCharacter = () => {
  const name = useSelector((state) => state.name);
  //console.log(name)

  return (
    <>
   {
    name !== undefined ? (
      <div>
      <Navbar />
      <div className="container-filter">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {name.map((el, index) => (
              <Grid item xs={1} sm={4} md={4} key={index}>
                <Item>
                  <div className="cards">
                    <Link to={"/character/" + el.id}>
                      <Card id={el.id} name={el.name} image={el.image} />
                    </Link>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
    ) : <AccessDenied/>
   }
   </>
  );
};

export default FilterCharacter;
