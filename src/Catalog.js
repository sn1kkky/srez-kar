// Catalog.js
import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const Catalog = ({ carpets, onDetailsClick, onOrderClick }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, padding: 5 }}>
    {carpets.map((carpet) => (
      <Card key={carpet.id} sx={{ maxWidth: 300, borderRadius: 4, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 10 } }}>
        <CardMedia
          component="img"
          height="200"
          image={carpet.image}
          alt={carpet.name}
          sx={{ borderRadius: "4px 4px 0 0" }}
        />
        <CardContent sx={{ textAlign: "center", padding: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {carpet.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", marginBottom: 2 }}>
            {carpet.description}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {carpet.price} ₽
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "darkred",
                color: "white",
                "&:hover": { backgroundColor: "red" },
                marginRight: 2,
              }}
              onClick={() => onOrderClick(carpet)}
            >
              {carpet.stock > 0 ? "В корзину" : "Заказать"}
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "darkred",
                color: "red",
                "&:hover": { borderColor: "darkred", backgroundColor: "#f1f1f1" },
              }}
              onClick={() => onDetailsClick(carpet.id)}
            >
              Подробнее
            </Button>
          </Box>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default Catalog;