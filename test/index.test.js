import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
const { expect } = chai;

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  describe('smock tests', () => {
    it('method search should be exist', () => {
      expect(search).to.exist;
    });

    it('method searchAlbums should be exist', () => {
      expect(searchAlbums).to.exist;
    });

    it('method searchArtists should be exist', () => {
      expect(searchArtists).to.exist;
    });

    it('method searchTracks should be exist', () => {
      expect(searchTracks).to.exist;
    });

    it('method searchPlaylists should be exist', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic search', () => {
    let fetchedStub;
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      const artist = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive correct url to fetch function', () => {
      context('passing one type', () => {
        const artist = search('Incubus', 'artist');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist',
        );

        const albums = search('Incubus', 'album');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album',
        );
      });

      context('passing more one type', () => {
        const artistsAndAlbums = search('Incubus', ['artists', 'album']);

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artists,album',
        );
      });
    });
  });
});
