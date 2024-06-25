"use client";
import { useState } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useBookmarks } from './BookmarkContext';
import styles from './Card.module.css';

export default function ProjectCard({ project }) {
  const { addBookmark } = useBookmarks();

  const handleBookmarkClick = (e) => {
    e.stopPropagation(); 
    addBookmark(project);
  };

  return (
    <Card className={styles.projectCard}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
        className={styles.cardMedia}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.institution}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Project Mode: {project.mode}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Deadline: {project.deadline}
        </Typography>
      </CardContent>
      <div className={styles.bookmarkIcon}>
        <Link href="/favorites" passHref>
          <IconButton onClick={handleBookmarkClick} color="primary">
            <BookmarkBorderIcon />
          </IconButton>
        </Link>
      </div>
      <div className={styles.cardOverlay}>
        <Typography variant="body2" className={styles.cardDescription}>
          {project.description}
        </Typography>
        <Link href={`/projects/${project.id}`} passHref>
          <Button size="small" variant="contained" className={styles.readMoreButton}>
            Read More
          </Button>
        </Link>
      </div>
    </Card>
  );
}
