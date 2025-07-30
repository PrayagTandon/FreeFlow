// import express from "express";
// // import prisma from "../../prisma";

// const router = express.Router();

// router.get("/:cognitoId", async (req, res) => {
//   const { cognitoId } = req.params;
//   try {
//     const freelancer = await prisma.freelancer.findUnique({
//       where: { CognitoID: cognitoId },
//     });

//     if (!freelancer) return res.status(404).json({ error: "Not found" });

//     res.json(freelancer);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;