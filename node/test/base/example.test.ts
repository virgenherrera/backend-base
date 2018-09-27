import { } from 'mocha';
import { expect, should } from 'chai';
import * as request from 'supertest';

should();
describe('Suite1', () => {
	it('should be true', () => {
		expect(!false).to.be.equal(true);
	});

	it('should pass', (done) => {
		const service = 'https://reqres.in/api/';
		const url = 'users/2';

		request(service)
			.get(url)
			.expect(200)
			.end((err, { body }) => {
				if (err) {
					return done(err);
				}

				expect(body).to.be.an('object');
				expect(body).to.have.property('data');

				expect(body.data).to.be.an('object')
					.that.has.keys('id', 'first_name', 'last_name', 'avatar');

				expect(body.data.id).to.be.a('number');
				expect(body.data.first_name).to.be.a('string');
				expect(body.data.last_name).to.be.a('string');
				expect(body.data.avatar).to.be.a('string');

				expect(body.data.id).to.be.equal(2);
				expect(body.data.first_name).to.be.equal('Janet');
				expect(body.data.last_name).to.be.equal('Weaver');
				expect(body.data.avatar).to.be.equal('https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg');

				done();
			});
	});
});
