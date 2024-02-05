# Mission-02

## 🚀 요구사항

---

<aside>
⏰ 마크업 구현 ✅ / 기능 구현 ❌

- [x] 바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택합니다.
- [x] 바닐라 프로젝트에서 활용했던 데이터베이스의
      데이터를 JSON 파일로 로컬 드라이브에 저장합니다.
- [x] JSON 데이터를 불러와 마크업에 연결하여 UI를 구현하세요.
    필요한 경우, 리스트 렌더링을 활용해보세요.
</aside>

<br/>

## 📺 구현할 페이지

---

### [sunfish-EUID](https://github.com/FRONTENDSCHOOL8/sunfish-EUID) : myProfile 페이지

<img width="728" alt="image" src="https://github.com/zooyaam/react-homework/assets/125597330/751a38ed-1cbf-4d9e-a60d-b86d6e289a1a">

사용할 데이터 : 매너 평가 갯수, 매너 평가

<br/>
<br/>

## ⚙️ 환경 구성

---

```bash
pnpm create vite mission-02  --template react
pnpm i
```

```bash
pnpm install -D tailwindcss postcss autoprefixer
pnpx tailwindcss init -p
```

<br/>
<br/>

## 🚀 기능 구현

---

<img width="683" alt="image" src="https://github.com/zooyaam/react-homework/assets/125597330/0664dde4-37a3-4ba0-93f1-2ea8c4fc0a4e">

`filter` `map`을 사용한 리스트 렌더링을 통해 내가 받은 매너평가 영역을 렌더링했다. count가 0인 평가는 `filter`로 걸러주었다.

리스트 렌더링을 하며 `key` prop에 대한 오류를 경험할 수 있었다.

<br/>
<br/>
