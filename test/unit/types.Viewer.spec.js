/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';

chai.use(chaiHttp);

describe('types', () => {
  describe('Viewer', () => {
    it('.me must be null if user is not authenticated', (done) => {
      chai.request(app)
      .post('/graphql')
      .send({ query: 'query { viewer { me { id, email } } }' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.deep.equal({ data: { viewer: { me: null } } });
        done();
      });
    });
  });

  describe('Router /members', () => {
    describe('GET', () => {
      it('must return a json array and have keys id, name, email', (done) => {
        chai.request(app)
        .get('/members')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.all.keys('id', 'name', 'email');
          done();
        });
      });
    });
  });

  describe('Router /pessoa', () => {
    describe('GET', () => {
      it('must return a json array and have keys pessoa_nome, pessoa_cpf, pessoa_email, pessoa_telefone', (done) => {
        chai.request(app)
        .get('/pessoa')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.all.keys('pessoa_nome', 'pessoa_cpf', 'pessoa_email', 'pessoa_telefone', 'pessoa_ident');
          done();
        });
      });
    });
  });

  describe('Router /van', () => {
    describe('GET', () => {
      it('must return a json array and have keys van_id, van_placa', (done) => {
        chai.request(app)
        .get('/van')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.all.keys('van_id', 'van_placa', 'van_modelo', 'van_renavan');
          done();
        });
      });
    });
  });

  describe('Router /servicos', () => {
    describe('GET', () => {
      it('must return a json array', (done) => {
        chai.request(app)
        .get('/servicos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.all.keys('servico_id', 'servico_desc');
          done();
        });
      });
    });
  });
});
