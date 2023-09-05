import React, { useState } from 'react'
import GetOneChapter from '../../components/Novels/GetOneChapter.component'
import { useParams } from 'react-router-dom'
import GetAllParagraphs from '../../components/Novels/GetAllParagraphs.component'
import NavChapter from '../../components/Novels/NavChapter.component'

export default function Chapter() {
  const {novelId, chapterId} = useParams();
  const [nextChapterBool, setNextChapterBool]= useState<boolean>(false);
  return (
    <>
      <NavChapter novel={novelId} chapter={chapterId} chapterBool={nextChapterBool} />
      <GetOneChapter novel={novelId} chapter={chapterId} setChapterBool={setNextChapterBool}/>
      <GetAllParagraphs novel={novelId} chapter={chapterId} />
      <NavChapter novel={novelId} chapter={chapterId} chapterBool={nextChapterBool} />
    </>
  )
}
