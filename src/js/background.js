const backgroundUrl = [
  "https://images.unsplash.com/photo-1507298130624-48d82262b97f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470165298985-da625de26cf9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581597389481-b31ce548ef61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1532969476555-7a4eb819a357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544827503-673e2a2c4c00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1591342699120-d2ea2fe7218d?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1535752385016-16aa049b6a8d?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708429439376-e9c5bb77a249?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1685301072752-a200d194aacb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541959833400-049d37f98ccd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const backgroundSrc = `${
  backgroundUrl[Math.floor(Math.random() * backgroundUrl.length)]
}`;
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${backgroundSrc})`;

/* 이미지 출처
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%8C%8C%EB%8F%84-%ED%98%95%EC%84%B1-%EC%82%AC%EC%A7%84-4qO-IMqM52U
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%85%B9%EC%83%89-%EA%B7%B8%EB%9D%BC%EC%97%90-%EA%B0%88%EC%83%89-%EC%84%A4%EC%B9%98%EB%A5%98%EC%9D%98-%EC%84%A0%ED%83%9D%EC%A0%81-%EC%B4%88%EC%A0%90-%EC%82%AC%EC%A7%84-Mw46Q41UfZ8
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B0%88%EC%83%89-%EB%82%98%EB%AC%B4-%EB%91%A5%EA%B7%BC-%EC%A0%91%EC%8B%9C%EC%97%90-%EB%85%B9%EC%83%89%EA%B3%BC-%EB%B9%A8%EA%B0%84%EC%83%89-%EC%97%B4%EB%A7%A4%EC%99%80-%EA%B2%80%EC%9D%80-%EB%94%B8%EA%B8%B0%EA%B0%80-%EB%93%A4%EC%96%B4%EA%B0%84-%ED%94%BC%EC%9E%90-ASROWj9j2oM
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%9A%8C%EC%83%89%EC%9C%BC%EB%A1%9C-%EC%B9%A0%ED%95%B4%EC%A7%84-%EC%9D%B8%ED%94%84%EB%9D%BC-83ds_1f4ldE
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%AE-%EB%8F%99%EC%95%88%EC%9D%98-%EB%8F%84%EC%8B%9C-9im7JmZKDpY
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%AE%EC%97%90%EB%8A%94-%ED%9D%B0%EC%83%89-%EC%BD%98%ED%81%AC%EB%A6%AC%ED%8A%B8-%EA%B1%B4%EB%AC%BC-GKar2kB3ZHk
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%AE-%EB%8F%99%EC%95%88-%EC%88%B2%EC%9D%98-%EB%B2%8C%EB%A0%88-%EB%88%88-%EB%B3%B4%EA%B8%B0-19SC2oaVZW0
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%A7%80%EA%B5%AC%EC%99%80-%EC%9C%84%EC%84%B1%EC%9D%98-%EB%AA%A8%EC%8A%B5-yZygONrUBe8
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%88%98%EC%97%AD-%EA%B7%BC%EC%B2%98%EC%97%90-%EB%88%88%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%82%B0-XuD9vHw6yeY
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%98%B8%EC%88%98%EB%A5%BC-%EC%A0%84%EA%B2%BD%EC%97%90-%EB%91%90%EA%B3%A0-%EC%9E%88%EB%8A%94-%EC%82%B0%EB%A7%A5%EC%9D%98-%EB%AA%A8%EC%8A%B5-9iuZxE6KbAw
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%93%A4%ED%8C%90%EC%97%90-%EC%84%9C-%EC%9E%88%EB%8A%94-%EA%B8%B0%EB%A6%B0-%EB%AC%B4%EB%A6%AC-FbtnXXN-TkQ
https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%88%B2%EC%86%8D%EC%9D%98-%EB%82%98%EB%AC%B4%EB%93%A4-7zg5bnhm2X0
*/
