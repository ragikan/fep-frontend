"use client"
import { createContext, useState, useContext } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedProjects, setBookmarkedProjects] = useState([]);

  const addBookmark = (project) => {
    setBookmarkedProjects((prev) => [...prev, project]);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedProjects, addBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);
