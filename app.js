const createError = require('http-errors');
const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const tablesRouter = require('./routes/tables');
const entradaRouter = require('./routes/entradas');
const saidaRouter = require('./routes/saidas');
const previsaoRouter = require('./routes/previsoes');
const caixaRouter = require('./routes/caixa');
const loginRouter = require('./routes/login');
const dashRouter = require('./routes/index');
const billingRouter = require('./routes/billing');
const profileRouter = require('./routes/count');
const faqRouter = require('./routes/faq');
const devsRouter = require('./routes/devs')
const admLoginRouter = require('./routes/login-adm');
const admCadIndexRouter = require('./routes/index-adm');
const admCadFormRouter = require('./routes/form-adm');
const admPermissaoRouter = require('./routes/permissao');
const error404 = require('./routes/404');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', dashRouter);
app.use('/tables', tablesRouter);
app.use('/tables/entradas', entradaRouter);
app.use('/tables/saidas', saidaRouter);
app.use('/tables/previsao', previsaoRouter);
app.use('/tables/caixa', caixaRouter);
app.use('/login', loginRouter);
app.use('/billing', billingRouter);
app.use('/profile', profileRouter);
app.use('/faq', faqRouter);
app.use('/devs', devsRouter);
app.use('/adm/login/', admLoginRouter);
app.use('/adm/cadastro/', admCadIndexRouter);
app.use('/adm/cadastro/form', admCadFormRouter);
app.use('/adm/cadastro/permissao', admPermissaoRouter);
app.use('/*', error404);


app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'planbase',
  resave: false,
  saveUninitialized: true,
}));

module.exports = app;

