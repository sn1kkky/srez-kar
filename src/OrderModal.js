import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const OrderModal = ({ open, onClose, carpet }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      alert("Ваш заказ принят. Мы свяжемся с вами по электронной почте.");
      onClose();
    } else {
      alert("Пожалуйста, введите свой email.");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: 400,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Заказ товара: {carpet.name}
        </Typography>
        <TextField
          label="Ваш Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={onClose}>
            Отмена
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Подтвердить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default OrderModal;