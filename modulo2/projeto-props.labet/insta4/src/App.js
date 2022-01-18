import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Lorena'}
          fotoUsuario={'https://i.pinimg.com/736x/8a/2f/cd/8a2fcd3748e37492e8eaedca0e33db29.jpg'}
          fotoPost={'https://static.vecteezy.com/ti/vetor-gratis/t2/1225843-retrato-de-uma-jovem-negra-gr%C3%A1tis-vetor.jpg'}
        />
         <Post
          nomeUsuario={'Victor Hugo'}
          fotoUsuario={'https://thumbs.dreamstime.com/z/riso-do-menino-10167885.jpg'}
          fotoPost={'http://3.bp.blogspot.com/-mSmPV5c55bI/UQFuaZp5PqI/AAAAAAAAPjA/XXPOsYWTWAE/s1600/ultimate-spider-man-dvd-alto.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
