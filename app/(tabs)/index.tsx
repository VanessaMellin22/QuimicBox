import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, ScrollView,  ImageBackground } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "@/theme"; 
import { Icon } from "react-native-elements";
import { Picker } from '@react-native-picker/picker'; // Importando o Picker 
import { launchImageLibrary } from 'react-native-image-picker';

export default function Pagprof() {
    const [text, setText] = useState<string>('');
    const [selectedArea, setSelectedArea] = useState<string>('area1');
    const [selectedSubarea, setSelectedSubarea] = useState<string>('subarea1');
    const [selectedNivel, setSelectedNivel] = useState<string>('nivel1');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    

    const handleImagePicker = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
            },
            (response) => {
                console.log(response); // Para depuração
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else if (response.assets && Array.isArray(response.assets) && response.assets.length > 0) {
                    const imageUri = response.assets[0].uri;
                    // Verifica se imageUri é uma string antes de definir o estado
                    if (typeof imageUri === 'string') {
                        setSelectedImage(imageUri);
                    } else {
                        console.log('Unexpected URI type:', imageUri);
                    }
                } else {
                    console.log('No image selected or unexpected response structure');
                }
            }
        );
    };
    
    const questoes = [
        { id: 1, texto: '(PUC-RS) A aceitação histórica da ideia de que a matéria é composta de átomos foi lenta e gradual. Na Grécia...' },
        { id: 2, texto: 'Qual cientista propôs o primeiro modelo atômico moderno que ficou conhecido como "bola de bilhar"...' },
        { id: 3, texto: '(UFF-MG) Associe as afirmações a seus respectivos responsáveis: I - O átomo não é indivisível e a matéria...' }
    ];

    return (
        <ScrollView>
            <ThemeProvider theme={theme}>
                <Container>
                     {/* parte da imagem inicial de BEM-VINDO */}
                    <Imgview>
                        <Image style={{ height: 780, width: '100%' }} source={require('../../assets/images/Testes.png')} />
                        <Apresentacao>
                            <Title> Bem-vindo à página do Professor </Title>
                            <Subtitle>Compartilhe seus Conteúdos, Materiais Didáticos e Ferramentas Educativas</Subtitle>
                        </Apresentacao>
                    </Imgview>

                   
        {/* parte de apresentação dos serviços */}
        <Section>
      <Title2>SERVIÇOS</Title2>
     
      
     <Section2>
        {/*adicionar questões */}
        <ServiceItem>
          <Content>
            <Icon name="post-add" size={40} color="#fff" />
            </Content>
          <Title3>Adicione Questões</Title3>
          <Subtitle3 >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </Subtitle3>
      </ServiceItem>

        {/*editar Questões */}
        <ServiceItem>
          <Content>
            <Icon name="edit" size={40} color="#fff" />
            </Content>
          <Title3>Edite Questões</Title3>
          <Subtitle3 >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </Subtitle3>
      </ServiceItem>

        {/* deletar questões*/}
        <ServiceItem>
          <Content>
            <Icon name="delete" size={40} color="#fff" />
            </Content>
          <Title3>Exclua Questões</Title3>
          <Subtitle3 >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </Subtitle3>
      </ServiceItem>
      </Section2>
    </Section>
    
                    {/*começo do adicionar questão */}
                <Contain>
                     {/* informativo da parte de adicionar questões */}
                <CardContainer>
                 <ImageCont>
                    <StyledImage
                        source={{ uri: '../../assets/Banners/question.png' }} // URL temporária
                    />
                </ImageCont>
                <TextContainer>
                    <Quote>Adicionar questão</Quote>
                    <TestimonialText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
                    </TestimonialText>
                </TextContainer>
            </CardContainer>
            <TextArea
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Descreva sua questão aqui..."
                            value={text}
                            onChangeText={setText}
                        />
             {/* começo da área de questão e alternativas */}
                    <Add>
                    
                          
                       
                        <ViewQuestions1>
                       
                         
          
                    

                    

                           <ContArea>
                            {/* Áreas de Texto com Círculos */}
          {['a', 'b', 'c', 'd', 'e'].map((letter, index) => (
                            <TextAreaContainer key={index} >
                                <Circle>
                                    <CircleText>{letter.toUpperCase()}</CircleText>
                                </Circle>
                                <TextArea2
                                    multiline={true}
                                    numberOfLines={2}
                                    placeholder={`Descreva sua alternativa ${letter.toUpperCase()} aqui...`}
                                />
                            </TextAreaContainer>
                        ))}

                       
                        </ContArea>
 {/* seletor de imagem */}
 <ImageUploadContainer>
            {selectedImage ? (
                <ImageContainer>
                    <SelectedImage source={{ uri: selectedImage }} resizeMode="contain" />
                </ImageContainer>
            ) : (
                <PlaceholderText></PlaceholderText>
            )}
            <Pressable onPress={handleImagePicker}>
                <UploadButton>
                    <Icon name="add-a-photo" type="material" color="black" />
                    
                </UploadButton>
            </Pressable>
        </ImageUploadContainer>
                        
                        </ViewQuestions1>
                        
                         </Add>
                         </Contain> 
                           <ViewQuestions>
                            <PickerContainer>
                            <StyledPicker
                                selectedValue={selectedArea}
                                onValueChange={(itemValue) => setSelectedArea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Área" value="area1" />
                                <Picker.Item label="Química Geral" value="area2" />
                                <Picker.Item label="Inorgânica" value="area3" />
                                <Picker.Item label="Físico-Química" value="area4" />
                                <Picker.Item label="Orgânica" value="area5" />
                            </StyledPicker>
                        </PickerContainer>

                       
                        <PickerContainer>
                            <StyledPicker
                                selectedValue={selectedSubarea}
                                onValueChange={(itemValue) => setSelectedSubarea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Subárea" value="subarea1" />
                                <Picker.Item label="Reações Químicas" value="subarea2" />
                                <Picker.Item label="Estrutura Atômica" value="subarea3" />
                                <Picker.Item label="Ligação Química" value="subarea4" />
                                <Picker.Item label="Termodinâmica Química" value="subarea5" />
                            </StyledPicker>
                        </PickerContainer>

                        
                        <PickerContainer>
                            <StyledPicker
                                selectedValue={selectedNivel}
                                onValueChange={(itemValue) => setSelectedNivel(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Nível" value="nivel1" />
                                <Picker.Item label="1" value="nivel2" />
                                <Picker.Item label="2" value="nivel3" />
                                <Picker.Item label="3" value="nivel4" />
                            </StyledPicker>
                        </PickerContainer>
                        

                          
                        <RoundButton>
            <Icon style={{ justifyContent: 'center', alignItems: 'center' }}
            name="add" 
            type="material" 
            color="white" 
            size={30} />
        </RoundButton>
                         
                     </ViewQuestions> 

       
                   
                    
                    
                      

                    <CardContainer>
                <ImageCont>
                    <StyledImage
                        source={{ uri: '../../assets/Banners/pencil.png' }} // URL temporária
                    />
                </ImageCont>
                <TextContainer>
                    <Quote>Edite</Quote>
                    <TestimonialText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
                    </TestimonialText>
                   
                </TextContainer>

                <ImageCont>
                    <StyledImage
                        source={{ uri: '../../assets/Banners/delete-file.png' }} // URL temporária
                    />
                </ImageCont>
                <TextContainer>
                    <Quote>Delete</Quote>
                    <TestimonialText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
                    </TestimonialText>
                   
                </TextContainer>
            </CardContainer>
        

                    <Add2>
                    {/* Seção de Área e Subárea */}
                   
                    <View style={{ flexDirection: 'row', marginBottom: 20, gap:300  }}>
                        <PickerContainer2>
                            <StyledPicker2
                                selectedValue={selectedArea}
                                onValueChange={(itemValue) => setSelectedArea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Área" value="area1" />
                                <Picker.Item label="Atomística" value="area2" />
                                <Picker.Item label="Química Orgânica" value="area3" />
                                <Picker.Item label="Química Inorgânica" value="area4" />
                                <Picker.Item label="Química Analítica" value="area5" />
                            </StyledPicker2>
                        </PickerContainer2>

                        <PickerContainer2>
                            <StyledPicker2
                                selectedValue={selectedSubarea}
                                onValueChange={(itemValue) => setSelectedSubarea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Subárea" value="subarea1" />
                                <Picker.Item label="Modelo Atômico" value="subarea2" />
                                <Picker.Item label="Estrutura Atômica" value="subarea3" />
                                <Picker.Item label="Ligação Química" value="subarea4" />
                            </StyledPicker2>
                        </PickerContainer2>
                    </View>

                    {/* Seção de Questões */}
                    <ContQuestion>
                    {questoes.map((questao) => (
                        <QuestaoContainer key={questao.id}>
                            <TextoQuestao>Questão: {questao.texto}</TextoQuestao>
                            <Acoes>
                                <BotaoAcao>
                                    <Icon name="edit" type="material" color="white" />
                                </BotaoAcao>
                                <BotaoAcaoExcluir>
                                    <Icon name="delete" type="material" color="white" />
                                </BotaoAcaoExcluir>
                            </Acoes>
                        </QuestaoContainer>
                    ))}</ContQuestion>
                     </Add2>
                
               
            
        
    

                    
                </Container>
            </ThemeProvider>
        </ScrollView>
    );
}

const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;
const Imgview = styled.View`
`;

const Title = styled.Text`
    font-size:  ${({theme}) => theme.FONT_SIZE.XXL} ;
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE} ;
    text-align: center;
`;

const Subtitle = styled.Text`
    font-size:  ${({theme}) => theme.FONT_SIZE.LG} ;
    color: ${({theme}) => theme.COLORS.GRAY_200} ;
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

const Section = styled.View`
    flex: 1;
    align-Items: 'center';
    padding: 20px;
    align-items: center;
    justify-content:center;
    gap:40px;
    
    
    
`;
const Section2 = styled.View`
    gap:70px;
    width: '100%';
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin-bottom:-1060px;
    
`;

const Apresentacao = styled.View`
    align-items: center;
    margin-top: -400;
`;

const Title2 = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_700} ;
    font-size:  ${({theme}) => theme.FONT_SIZE.XXL} ;
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
    text-align: center;
`;
const Title3 = styled.Text`
font-size:  ${({theme}) => theme.FONT_SIZE.XXL} ;
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.BLUE_700} ;
    text-align: center
    
`

const Subtitle3 = styled.Text`
    width: 25rem;
    padding-left: 1rem;
    text-align:center;
`;

const Content = styled.Text`
     background-Color:  ${({theme}) => theme.COLORS.BLUE_700} ;
    padding: 15px;
    border-Radius: 50px;
    margin-Bottom: 10px;
`;
const ServiceItem = styled.View`
    align-Items: 'center';
    width: '30%';
    flex-direction:column;
    align-items: center;
    justify-content:center;
`
const Add = styled.View` 
    margin-top:1rem;
    flex-direction: column;
    width: 80rem;
    align-items:center;
    justify-content:center
    
    
`;

const TextArea = styled.TextInput`
    height: 170px;
    width:94%;
    border-radius:2rem;
    padding: 18px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
    margin-bottom: 16px;
    margin: 30px;
    
`;

const PickerContainer = styled.View`
    height: 50;
    width: 150;
    margin-left:5px;
    border-radius: 4px;
    flex-direction:row
   
`;

const StyledPicker = styled(Picker)`
    height: 50px;
    width: 150;
    border-radius: 10px;
    
`
const ContArea= styled.View`
flex-direction: row;
    flex-wrap: wrap;
    margin-left:20px;
    justify-content: space-between; /* Espaça os elementos para se alinharem em colunas */
     

`
const TextAreaContainer = styled.View`
    flex-direction: row;
    width: 48%; /* Cada elemento ocupará quase metade da largura, formando duas colunas */
    align-items: center;
    margin-bottom: 16px; /* Ajusta o espaçamento entre linhas */
    
`;

const Circle = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px; /* Círculo */
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    align-items: center;
    justify-content: center;
    
    
`;

const CircleText = styled.Text`
    color: white;
    font-weight: bold;
`
const TextArea2 = styled.TextInput`
    height: 80px;
    width:500px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
    border-radius:1rem;
    padding: 10px;
    text-align: top;
    margin-top:0.5rem;
    margin-left:0.5rem;
`;
const ViewQuestions = styled.View`
    height:90px;
    flex-direction:row;
    margin-top:3px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700}; 
    align-items:center;
    justify-content:center;
    gap:2px;

`
const ViewQuestions1 = styled.View`
    flex-direction:column;
    
   
  
    
`
const ImageUploadContainer = styled.View`
    align-items: center;
    flex-direction:row;
    left:70%;
    top:-90px;
  
`;

const ImageContainer = styled.View`
  
    height: 200px; /* Defina a altura desejada */
    width: 200px; /* Defina a largura desejada */
    justify-content: center;
    align-items: center;
    right:10px
    
`;

const SelectedImage = styled.Image`
    height: 100%;
    width: 100%;
   
`;

const PlaceholderText = styled.Text`
    font-size: 14px;
    color: gray;
`;

const UploadButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    padding: 10px;
`;

const ButtonText = styled.Text`
     color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-left: 5px;
`;
const RoundButton = styled(Pressable)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: green;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    right: 0px;
    left:1170px;
`;

const PickerContainer2 = styled.View`
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    width: 15px;
    align-items:center;
    gap: 2000px;
   
    
`;

const StyledPicker2 = styled(Picker)`
    height: 50px;
    width:15rem;
    border-radius:10px;
    
`;

const QuestaoContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;
  
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TextoQuestao = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

const Acoes = styled.View`
    flex-direction: row;
    gap: 10px;
`;

const BotaoAcao = styled(Pressable)`
    background-color: #4c9baf;
    padding: 10px;
    border-radius: 5px;
`;

const BotaoAcaoExcluir = styled(Pressable)`
    background-color: #F44336;
    padding: 10px;
    border-radius: 5px;
`;
const Add2 = styled.View`
    
    border-radius:20px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700}; 
    justify-content: center;
    align-items: center;
    align-self: center;
    
    height:30rem;
    width: 90%;
    
    

`
const ContQuestion = styled.View`
    width:60%;
    align-items:center;
    justify-content:center;
    border-radius: 15px;
    margin-top:200px,

`
const CardContainer = styled.View`
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.BLUE_500};
    padding: 20px;
    margin: 70px;
    border-radius: 10px;
   
`;

const ImageCont = styled.View`
    
    overflow: hidden;
    margin-right: 15px;
    margin-left:20px
`;

const StyledImage = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 25px;
`;

const TextContainer = styled.View`
    flex: 1;
`;

const Quote = styled.Text`
    font-size: 25px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
    margin-bottom: -10px;
`;

const TestimonialText = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    line-height: 22px;
`;

const Highlight = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLUE_500};
    font-weight: bold;
`;

const Author = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 10px;
    font-style: italic;
`;
const Contain = styled.View`
    justify-Content: 'center';
    align-Items: 'center';
    margin-Top:800px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    
 `;