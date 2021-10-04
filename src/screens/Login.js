import React from 'react'
import styled from 'styled-components'

function Login() {
	return (
		<LoginContainer>
			<LoginWrap>
				<LoginImgWrap>
					<LoginImg src="/images/login-img.png" alt="login-img"/>
				</LoginImgWrap>
				<LoginForm>
					<LoginSpan>Member Login</LoginSpan>
					<InputWrapper>
						<Input type="text" name="email" placeholder="Email"/>
					</InputWrapper>
					<InputWrapper>
						<Input type="password" name="password" placeholder="Password"/>
					</InputWrapper>
					<LoginButtonContainer>
						<LoginButton> Login </LoginButton>
					</LoginButtonContainer>
					<TextContainer1>
						<TextLink href="#">Forgot Username / Password</TextLink>
					</TextContainer1>
					<TextContainer2>
						<TextLink href="#">Create your Account</TextLink>
					</TextContainer2>
				</LoginForm>
			</LoginWrap>
		</LoginContainer>
	)
}

export default Login


const LoginContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 15px;
`

const LoginWrap = styled.div`
	width: 960px;
	background-color: #203040;
	border-radius: 10px;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 177px 130px 33px 95px;
`

const LoginImgWrap = styled.div`
	width: 316px;
`

const LoginImg = styled.img`
	max-width: 100%;
	vertical-align: middle;
	border-style: none;
`

const LoginForm = styled.form`
	width: 290px;
`

const LoginSpan = styled.span`
	font-size: 24px;
	color: yellow;
	line-height: 1.2;
	text-align: center;
	width: 100%;
	display: block;
	padding-bottom: 54px;
`

const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	z-index: 1;
	margin-bottom: 10px;
`

const Input = styled.input`
	font-size: 15px;
	line-height: 15px;
	color: #666666;
	display: block;
	width: 100%;
	background-color: #e6e6e6;
	height: 50px;
	border-radius: 25px;
	padding: 0 30px 0 68px;
`

const LoginButtonContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 20px;
`

const LoginButton = styled.button`
	font-size: 15px;
	line-height: 1.5px;
	color: #fff;
	text-transform: uppercase;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	background-color: #57b846;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 25px;
`

const TextContainer1 = styled.div`
	padding-top: 12px;
	text-align: center!important;
`

const TextLink = styled.a`
	font-size: 13;
	line-height: 1.5px;
	color: yellow;
`

const TextContainer2 = styled.div`
	padding-top: 136px;
	text-align: center!important;

`