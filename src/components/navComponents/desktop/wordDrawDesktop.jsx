import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./logoSVG.css";
import { useTheme } from "@mui/material/styles";

const WordDrawDesktop = () => {
  const theme = useTheme();
  const pathVariants = {
    start: {
      opacity: 0,
      pathLength: 0,
    },
    finished: {
      opacity: 1,
      pathLength: 1,

      transition: {
        duration: 1.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="svg-container" style={{ marginLeft: "35px" }}>
      <Link to="/">
        <motion.svg
          version="1.0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          width="400px"
          height="200px"
          viewBox="0 0 800 125"
          initial="start"
          animate="finished"
          className="center"
        >
          <g className="cls-13">
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{
                transition: "fill 1s ease, stroke 0.75s ease",
              }}
              className="cls-1"
              d="m67.23 70.09c-0.93 2.29-2.24 4.31-3.93 6.07s-3.68 3.16-5.97 4.18-4.79 1.54-7.5 1.54-5.21-0.51-7.47-1.54c-2.26-1.02-4.23-2.39-5.9-4.11-1.67-1.71-2.97-3.72-3.9-6-0.93-2.29-1.39-4.72-1.39-7.29v-0.14c0-2.57 0.46-5 1.39-7.29s2.24-4.31 3.93-6.07 3.68-3.16 5.97-4.18 4.79-1.54 7.5-1.54 5.2 0.51 7.47 1.54c2.26 1.03 4.23 2.39 5.9 4.11s2.97 3.72 3.89 6c0.93 2.29 1.39 4.72 1.39 7.29v0.14c0 2.57-0.46 5-1.39 7.29zm-2.32-7.29c0-2.18-0.38-4.23-1.15-6.15s-1.83-3.59-3.2-5.02c-1.36-1.42-2.97-2.54-4.81-3.34-1.84-0.81-3.82-1.21-5.92-1.21s-4.15 0.42-6 1.24c-1.84 0.83-3.42 1.95-4.74 3.34-1.32 1.4-2.35 3.05-3.09 4.94-0.74 1.9-1.11 3.91-1.11 6.05v0.14c0 2.18 0.38 4.23 1.15 6.15s1.83 3.59 3.2 5.02c1.36 1.42 2.97 2.54 4.81 3.34 1.84 0.81 3.82 1.21 5.92 1.21s4.15-0.41 6-1.25c1.84-0.83 3.42-1.94 4.74-3.34s2.35-3.05 3.09-4.94c0.74-1.9 1.11-3.91 1.11-6.05v-0.14z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="M105.79,32.08c-.81-.14-1.69-.21-2.64-.21-4.91,0-7.36,3.07-7.36,9.22v3.5h12.72v3.22h-12.72v33.23h-3.5v-33.23h-5.29v-3.22h5.29v-3.57c0-3.95.95-7,2.86-9.15,1.91-2.14,4.57-3.22,8-3.22,1.1,0,2.07.07,2.93.21s1.69.36,2.5.64v3.29c-1.05-.33-1.98-.57-2.79-.71Z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m193.58 70.77c-1.02 2.36-2.37 4.36-4.04 6s-3.56 2.91-5.68 3.79-4.28 1.32-6.47 1.32c-1.81 0-3.48-0.24-5-0.71-1.53-0.48-2.89-1.12-4.11-1.93-1.21-0.81-2.31-1.74-3.29-2.79s-1.85-2.14-2.61-3.29v19.3h-3.5v-47.88h3.5v8.15c0.76-1.19 1.64-2.33 2.64-3.43s2.11-2.05 3.32-2.86 2.57-1.46 4.07-1.97c1.5-0.5 3.16-0.75 4.97-0.75 2.19 0 4.35 0.43 6.47 1.29s4.01 2.1 5.68 3.72 3.01 3.61 4.04 5.97 1.54 5.01 1.54 7.97v0.14c0 2.96-0.51 5.61-1.54 7.97zm-2.18-7.97c0-2.38-0.38-4.55-1.15-6.5-0.76-1.95-1.8-3.61-3.12-4.97-1.31-1.36-2.84-2.41-4.58-3.14-1.74-0.74-3.57-1.11-5.48-1.11s-3.76 0.38-5.55 1.14-3.38 1.83-4.76 3.22c-1.39 1.38-2.5 3.03-3.33 4.93-0.83 1.91-1.25 4.03-1.25 6.36v0.14c0 2.33 0.42 4.47 1.25 6.4s1.95 3.57 3.33 4.93 2.97 2.42 4.76 3.18 3.64 1.14 5.55 1.14c2.01 0 3.88-0.36 5.62-1.07s3.26-1.74 4.55-3.07 2.3-2.97 3.04-4.89c0.74-1.93 1.11-4.11 1.11-6.54v-0.14z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m219.49 70.28c0.86 1.75 1.93 3.25 3.22 4.48s2.76 2.17 4.41 2.81 3.38 0.96 5.19 0.96c2.87 0 5.29-0.55 7.27-1.64 1.98-1.1 3.74-2.45 5.27-4.07l2.43 2.14c-1.86 2-3.97 3.66-6.33 4.97s-5.29 1.96-8.77 1.96c-2.39 0-4.67-0.45-6.84-1.36s-4.08-2.19-5.73-3.86-2.95-3.67-3.9-6c-0.96-2.33-1.43-4.93-1.43-7.79v-0.14c0-2.62 0.44-5.08 1.32-7.4 0.88-2.31 2.1-4.32 3.64-6.04 1.55-1.72 3.37-3.07 5.47-4.07s4.38-1.5 6.86-1.5 4.88 0.49 6.93 1.46c2.05 0.98 3.8 2.32 5.25 4.04s2.57 3.73 3.36 6.04 1.18 4.82 1.18 7.54v0.79c0 0.14-0.02 0.36-0.07 0.64h-30.23c0.14 2.28 0.65 4.29 1.5 6.04zm25.08-9.19c-0.14-1.86-0.51-3.63-1.11-5.32s-1.43-3.19-2.51-4.5-2.4-2.36-3.98-3.14c-1.58-0.79-3.42-1.18-5.52-1.18-1.82 0-3.51 0.36-5.09 1.07s-2.95 1.7-4.12 2.97c-1.17 1.26-2.14 2.76-2.9 4.5s-1.22 3.61-1.36 5.61h26.58z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m296.95 81.03v-21.65c0-3.76-1-6.78-3-9.04s-4.86-3.39-8.58-3.39c-1.81 0-3.48 0.32-5 0.96-1.53 0.64-2.86 1.54-4 2.68s-2.04 2.51-2.68 4.11-0.96 3.35-0.96 5.25v21.08h-3.5v-36.45h3.5v6.79c1.24-2.14 2.91-3.95 5-5.43 2.1-1.48 4.81-2.22 8.15-2.22 2.29 0 4.33 0.37 6.15 1.11 1.81 0.74 3.35 1.78 4.61 3.11s2.22 2.92 2.86 4.75 0.96 3.85 0.96 6.04v22.3h-3.5z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m347.15 75.5c-0.64 1.31-1.54 2.43-2.68 3.35s-2.48 1.64-4 2.14c-1.53 0.5-3.17 0.75-4.93 0.75-2.67 0-5.34-0.5-8-1.5-2.67-1-4.98-2.29-6.93-3.86l2.07-2.79c2 1.53 4.1 2.71 6.29 3.54s4.45 1.25 6.79 1.25c2.48 0 4.56-0.62 6.25-1.85 1.69-1.24 2.54-2.92 2.54-5.06v-0.14c0-1.04-0.26-1.95-0.79-2.71-0.52-0.76-1.24-1.43-2.14-2-0.91-0.57-1.93-1.05-3.07-1.43s-2.36-0.76-3.64-1.14c-1.48-0.43-2.97-0.88-4.47-1.36s-2.85-1.08-4.04-1.82-2.16-1.65-2.89-2.75c-0.74-1.09-1.11-2.45-1.11-4.07v-0.14c0-1.47 0.3-2.82 0.89-4.03s1.42-2.27 2.47-3.17 2.31-1.6 3.79-2.1 3.1-0.75 4.86-0.75c2.19 0 4.44 0.37 6.75 1.1s4.37 1.72 6.18 2.98l-1.86 2.93c-1.67-1.1-3.47-1.98-5.4-2.64-1.93-0.67-3.87-1-5.82-1-2.53 0-4.54 0.61-6.04 1.82s-2.25 2.72-2.25 4.53v0.14c0 1 0.29 1.87 0.86 2.6 0.57 0.74 1.32 1.37 2.25 1.89s2.01 0.99 3.25 1.39 2.5 0.8 3.79 1.18c1.48 0.43 2.93 0.89 4.36 1.39s2.71 1.14 3.86 1.92c1.14 0.79 2.06 1.72 2.75 2.82 0.69 1.09 1.04 2.45 1.04 4.07v0.14c0 1.62-0.32 3.08-0.96 4.39z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m533.31 70.77c-1.02 2.36-2.37 4.36-4.04 6s-3.56 2.91-5.68 3.79-4.28 1.32-6.47 1.32c-1.81 0-3.48-0.24-5-0.71-1.53-0.48-2.89-1.12-4.11-1.93-1.21-0.81-2.31-1.74-3.29-2.79s-1.85-2.14-2.61-3.29v19.3h-3.5v-47.88h3.5v8.15c0.76-1.19 1.64-2.33 2.64-3.43s2.11-2.05 3.32-2.86 2.57-1.46 4.07-1.97c1.5-0.5 3.16-0.75 4.97-0.75 2.19 0 4.35 0.43 6.47 1.29s4.01 2.1 5.68 3.72 3.01 3.61 4.04 5.97 1.54 5.01 1.54 7.97v0.14c0 2.96-0.51 5.61-1.54 7.97zm-2.18-7.97c0-2.38-0.38-4.55-1.15-6.5-0.76-1.95-1.8-3.61-3.12-4.97-1.31-1.36-2.84-2.41-4.58-3.14-1.74-0.74-3.57-1.11-5.48-1.11s-3.76 0.38-5.55 1.14-3.38 1.83-4.76 3.22c-1.39 1.38-2.5 3.03-3.33 4.93-0.83 1.91-1.25 4.03-1.25 6.36v0.14c0 2.33 0.42 4.47 1.25 6.4s1.95 3.57 3.33 4.93 2.97 2.42 4.76 3.18 3.64 1.14 5.55 1.14c2.01 0 3.88-0.36 5.62-1.07s3.26-1.74 4.55-3.07 2.3-2.97 3.04-4.89c0.74-1.93 1.11-4.11 1.11-6.54v-0.14z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m590.06 70.09c-0.93 2.29-2.24 4.31-3.93 6.07s-3.68 3.16-5.97 4.18-4.79 1.54-7.5 1.54-5.21-0.51-7.47-1.54c-2.26-1.02-4.23-2.39-5.9-4.11-1.67-1.71-2.97-3.72-3.9-6-0.93-2.29-1.39-4.72-1.39-7.29v-0.14c0-2.57 0.46-5 1.39-7.29s2.24-4.31 3.93-6.07 3.68-3.16 5.97-4.18 4.79-1.54 7.5-1.54 5.2 0.51 7.47 1.54c2.26 1.03 4.23 2.39 5.9 4.11s2.97 3.72 3.89 6c0.93 2.29 1.39 4.72 1.39 7.29v0.14c0 2.57-0.46 5-1.39 7.29zm-2.33-7.29c0-2.18-0.38-4.23-1.15-6.15s-1.83-3.59-3.2-5.02c-1.36-1.42-2.97-2.54-4.81-3.34-1.84-0.81-3.82-1.21-5.92-1.21s-4.15 0.42-6 1.24c-1.84 0.83-3.42 1.95-4.74 3.34-1.32 1.4-2.35 3.05-3.09 4.94-0.74 1.9-1.11 3.91-1.11 6.05v0.14c0 2.18 0.38 4.23 1.15 6.15s1.83 3.59 3.2 5.02c1.36 1.42 2.97 2.54 4.81 3.34 1.84 0.81 3.82 1.21 5.92 1.21s4.15-0.41 6-1.25c1.84-0.83 3.42-1.94 4.74-3.34s2.35-3.05 3.09-4.94c0.74-1.9 1.11-3.91 1.11-6.05v-0.14z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m615.68 70.28c0.86 1.75 1.93 3.25 3.22 4.48s2.76 2.17 4.41 2.81 3.38 0.96 5.19 0.96c2.87 0 5.29-0.55 7.27-1.64 1.98-1.1 3.74-2.45 5.27-4.07l2.43 2.14c-1.86 2-3.97 3.66-6.33 4.97s-5.29 1.96-8.77 1.96c-2.39 0-4.67-0.45-6.84-1.36s-4.08-2.19-5.73-3.86-2.95-3.67-3.9-6c-0.96-2.33-1.43-4.93-1.43-7.79v-0.14c0-2.62 0.44-5.08 1.32-7.4 0.88-2.31 2.1-4.32 3.64-6.04 1.55-1.72 3.37-3.07 5.47-4.07s4.38-1.5 6.86-1.5 4.88 0.49 6.93 1.46c2.05 0.98 3.8 2.32 5.25 4.04s2.57 3.73 3.36 6.04 1.18 4.82 1.18 7.54v0.79c0 0.14-0.02 0.36-0.07 0.64h-30.23c0.14 2.28 0.65 4.29 1.5 6.04zm25.08-9.19c-0.14-1.86-0.51-3.63-1.11-5.32s-1.43-3.19-2.51-4.5-2.4-2.36-3.98-3.14c-1.58-0.79-3.42-1.18-5.52-1.18-1.82 0-3.51 0.36-5.09 1.07s-2.95 1.7-4.12 2.97c-1.17 1.26-2.14 2.76-2.9 4.5s-1.22 3.61-1.36 5.61h26.58z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m717.01 81.03v-21.65c0-3.95-0.95-7.01-2.86-9.18s-4.55-3.25-7.93-3.25c-1.53 0-2.99 0.29-4.39 0.86-1.41 0.57-2.63 1.41-3.68 2.5-1.05 1.1-1.88 2.44-2.5 4.04s-0.93 3.42-0.93 5.47v21.23h-3.5v-21.87c0-3.81-0.95-6.8-2.86-8.97s-4.5-3.25-7.79-3.25c-1.62 0-3.14 0.33-4.57 1s-2.67 1.6-3.72 2.79-1.87 2.57-2.47 4.15-0.89 3.29-0.89 5.15v21.01h-3.5v-36.45h3.5v6.5c0.57-0.95 1.23-1.87 1.97-2.75s1.58-1.67 2.54-2.36c0.95-0.69 2.06-1.24 3.32-1.64s2.7-0.61 4.32-0.61 3.01 0.21 4.32 0.64 2.47 1 3.47 1.72c1 0.71 1.87 1.55 2.61 2.5s1.37 1.95 1.89 3c0.57-1 1.26-1.98 2.07-2.93s1.75-1.8 2.82-2.54 2.29-1.32 3.64-1.75c1.36-0.43 2.89-0.64 4.61-0.64 2.14 0 4.08 0.37 5.82 1.11s3.22 1.76 4.43 3.07 2.14 2.91 2.79 4.79c0.64 1.88 0.96 3.97 0.96 6.25v22.08h-3.5z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="m767.5 75.5c-0.64 1.31-1.54 2.43-2.68 3.35s-2.48 1.64-4 2.14c-1.53 0.5-3.17 0.75-4.93 0.75-2.67 0-5.34-0.5-8-1.5-2.67-1-4.98-2.29-6.93-3.86l2.07-2.79c2 1.53 4.1 2.71 6.29 3.54s4.45 1.25 6.79 1.25c2.48 0 4.56-0.62 6.25-1.85 1.69-1.24 2.54-2.92 2.54-5.06v-0.14c0-1.04-0.26-1.95-0.79-2.71-0.52-0.76-1.24-1.43-2.14-2-0.91-0.57-1.93-1.05-3.07-1.43s-2.36-0.76-3.64-1.14c-1.48-0.43-2.97-0.88-4.47-1.36s-2.85-1.08-4.04-1.82-2.16-1.65-2.89-2.75c-0.74-1.09-1.11-2.45-1.11-4.07v-0.14c0-1.47 0.3-2.82 0.89-4.03s1.42-2.27 2.47-3.17 2.31-1.6 3.79-2.1 3.1-0.75 4.86-0.75c2.19 0 4.44 0.37 6.75 1.1s4.37 1.72 6.18 2.98l-1.86 2.93c-1.67-1.1-3.47-1.98-5.4-2.64-1.93-0.67-3.87-1-5.82-1-2.53 0-4.54 0.61-6.04 1.82s-2.25 2.72-2.25 4.53v0.14c0 1 0.29 1.87 0.86 2.6 0.57 0.74 1.32 1.37 2.25 1.89s2.01 0.99 3.25 1.39 2.5 0.8 3.79 1.18c1.48 0.43 2.93 0.89 4.36 1.39s2.71 1.14 3.86 1.92c1.14 0.79 2.06 1.72 2.75 2.82 0.69 1.09 1.04 2.45 1.04 4.07v0.14c0 1.62-0.32 3.08-0.96 4.39z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{
                transition: "fill 1s ease, stroke 0.75s ease",
              }}
              className="cls-1"
              d="M410.86,44.14c-3.89,1.82-7.67,3.58-11.52,5.37-.17-.25-.36-.45-.46-.68-2.42-5.58-4.22-11.31-4.24-17.49-.02-9.66,5.65-17.4,15.13-20.36,5.39-1.68,10.84-1.9,16.14.39,6.83,2.95,10.61,10.11,9.36,17.47-.82,4.82-3.31,8.67-7.01,11.71-5,4.12-10.54,7.43-16.41,10.15-5.69,2.64-11.14,5.7-16.07,9.56-4.66,3.64-8.23,8.16-9.18,14.2-1.12,7.21,1.02,13.35,6.81,17.92,3.76,2.97,8.24,3.51,12.87,2.8,4.64-.71,8.54-2.99,12.11-5.93q1.75-1.44,3.28.25c.63.7,1.26,1.42,1.89,2.13-.1.18-.13.32-.22.4-4.4,3.7-8.91,7.25-14.42,9.21-6.96,2.48-14.1,3.12-21.22,1.09-7.82-2.22-13.03-7.34-14.74-15.42-1.01-4.76.09-9.36,2.2-13.73,3.3-6.84,8.62-11.81,14.82-15.89,7.5-4.93,15.42-9.1,23.54-12.95,5.06-2.4,9.44-5.78,12.29-10.79,1.84-3.23,2.37-6.75,1.77-10.35-.71-4.18-3.27-7.04-7.34-8.15-4.19-1.14-8.06-.29-10.98,3.2-3.21,3.83-4.04,8.27-2.69,13.01,1.12,3.94,2.55,7.8,3.84,11.69.12.35.27.69.45,1.17Z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="M466.41,83.57c.74.56,1.4.98,1.96,1.51.22.2.38.69.3.96-2.01,6.5-5.03,12.28-11.51,15.42-6.07,2.93-12.17,2.59-18.19-.16-5.47-2.5-9.84-6.46-13.89-10.81-5.21-5.59-9.42-11.93-13.54-18.31-2.76-4.26-5.09-8.8-7.65-13.2-.46-.8-.38-1.35.42-1.85,2.98-1.88,5.95-3.78,8.91-5.68.79-.5,1.25-.35,1.74.51,4.99,8.69,10.41,17.11,16.42,25.12,3.52,4.7,7.27,9.24,12.2,12.59,3.27,2.22,6.82,3.65,10.84,3.59,5.68-.09,9.74-3.12,11.49-8.51.12-.37.3-.71.5-1.19Z"
            />
            <motion.path
              variants={pathVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={theme.palette.background.strokeColor}
              fill={theme.palette.background.fillColor}
              style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
              className="cls-1"
              d="M435.76,79.02c-.96-1.15-1.79-2.17-2.65-3.18-.47-.55-.09-.9.2-1.33,1.89-2.77,3.89-5.48,5.63-8.35,2.06-3.39,3.49-7.05,3.93-11.04.33-3.01-.42-5.62-2.85-7.53-.72-.57-1.63-.98-2.52-1.23-1.31-.37-.74-1.34-.79-2.07-.05-.76.62-.65,1.12-.65,8.52,0,17.04,0,25.56,0,.57,0,1.25-.09,1.16.83-.07.75.42,1.71-.97,1.91-1.67.24-3.34.57-4.95,1.06-1.86.56-3.43,1.66-4.49,3.33-2.33,3.66-4.78,7.25-6.92,11.03-3.21,5.69-6.81,11.1-10.67,16.36-.19.26-.43.5-.77.88Z"
            />
          </g>
        </motion.svg>
      </Link>
    </div>
  );
};

export default WordDrawDesktop;