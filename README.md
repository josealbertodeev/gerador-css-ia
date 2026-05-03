# Gerador CSS com IA 🤖

<div align="center">
  <img src="bot.jpg" alt="Robô IA" width="120" height="120" style="border-radius: 50%;">
  
  ### Transforme suas ideias em código CSS/HTML com o poder da Inteligência Artificial
  
  [![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)]()
  [![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)]()
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)]()
  [![Groq API](https://img.shields.io/badge/Groq-000000?style=flat-square&logo=groq&logoColor=white)]()
</div>

---

![video css IA](https://github.com/user-attachments/assets/16bb30d6-9f15-4785-a8fb-2e13f8e1319a)


## 📋 Sobre o Projeto

O **CSS Gerador com IA** é uma aplicação web inovadora que permite aos usuários descrever visualmente o que desejam criar e receber automaticamente o código CSS/HTML correspondente. Utilizando o poder da IA através da API Groq com o modelo Llama 3.3, a ferramenta interpreta descrições em linguagem natural e gera código funcional.

### ✨ Características Principais

- 🎨 **Interface Moderna**: Design elegante com tema dark e gradientes
- 🤖 **IA Avançada**: Powered by Llama 3.3-70B via Groq API
- 🎯 **Geração Inteligente**: Converte descrições em código real
- 👀 **Preview Tempo Real**: Visualização instantânea do resultado
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Interface Rápida**: Experiência fluida e animações suaves

---

## 🚀 Demonstração

### Como funciona:

1. **Descreva sua ideia**: "Bola azul pingando"
2. **Clique em Gerar**: A IA processa sua descrição
3. **Veja o resultado**: Código CSS/HTML + Preview visual

### Exemplos de prompts que funcionam:

- "Bola vermelha quicando"
- "Quadrado roxo girando"
- "Texto neon piscando"
- "Coração rosa pulsando"
- "Botão gradiente animado"

---

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização moderna com:
  - Flexbox para layout responsivo
  - Animações e transições CSS
  - Gradientes e efeitos visuais
  - Media queries para responsividade
- **JavaScript ES6+**: Lógica da aplicação e integração com API
- **Groq API**: Serviço de IA para processamento de linguagem natural
- **Llama 3.3-70B**: Modelo de IA para geração de código

---

---

## 🎯 Como Usar

1. **Digite sua descrição**: No campo de texto, descreva o que você imagina (ex: "círculo verde girando")

2. **Clique em "Gerar Código ⚡️"**: A IA processará sua descrição

3. **Visualize o resultado**: 
   - **Código**: Veja o HTML/CSS gerado
   - **Preview**: Visualize o resultado funcionando

4. **Copie e use**: O código pode ser copiado e usado em seus projetos

---

## 📁 Estrutura do Projeto

```
gerador-css-ia/
├── 📄 index.html          # Página principal
├── 🎨 styles.css          # Estilos e animações
├── ⚙️ scripts.js          # Lógica JavaScript
├── 🤖 bot.jpg            # Imagem do robô
└── 📖 README.md          # Este arquivo
```

---

## 🔧 Funcionalidades Técnicas

### API Integration
- **Endpoint**: Groq OpenAI-compatible API
- **Modelo**: `llama-3.3-70b-versatile`
- **Formato**: Resposta em HTML/CSS puro
- **Tratamento de erro**: Sistema robusto com mensagens amigáveis

### Responsividade
- **Desktop**: Layout em duas colunas (código + preview)
- **Tablet**: Layout adaptativo 
- **Mobile**: Layout em coluna única otimizado
- **Breakpoints**: 768px, 480px, 320px

### Animações CSS
- **Robô**: Animação contínua com rotação e escala
- **Botões**: Efeitos hover com elevação
- **Campos**: Transições suaves no foco
- **Feedback visual**: Estados de loading e sucesso

---

## 🎨 Customização

### Modificar Estilos
Os gradientes e cores podem ser facilmente modificados no arquivo [`styles.css`](styles.css):

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores do tema */
--primary: #4facfe;
--secondary: #00f2fe;
--background: #0f0f23;
```

### Configurar API
Para usar sua própria chave da API Groq, modifique [`scripts.js`](scripts.js):

```javascript
let chaveApi = "sua-chave-api-aqui"
```

---

## 🔍 Exemplos de Uso

### Prompt de Entrada
```
"Botão vermelho com borda arredondada que cresce quando passar o mouse"
```

### Código Gerado
```html
<style>
.botao {
  background-color: #ff4444;
  border-radius: 25px;
  padding: 15px 30px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.botao:hover {
  transform: scale(1.1);
}
</style>

<button class="botao">Clique aqui</button>
```

🔗 Deploy acesse [aqui]()
---

