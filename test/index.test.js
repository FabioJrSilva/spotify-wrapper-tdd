import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/index';

describe('Spotify Wrapper', () => {
  context('smock tests', () => {
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
});
