// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


// 'is' solidity version of inheritance, so brining all functions from this ERC721 code and brining it into our token. 
contract JalehsArt is ERC721, ERC721URIStorage, Ownable {


using Counters for Counters.Counter;
Counters.Counter private _tokenIds; //count all our tokens and iterate by +1
mapping(string => uint8) hashes;


  constructor() public ERC721("JalehsArt", "JAL") {

  }

 function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenIds.current());
        _tokenIds.increment();
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }


  function createCollectible(string memory hash, string memory tokenURI) public returns (uint256) {
  require(hashes [hash] != 1);
  hashes[hash] = 1;
  _tokenIds.increment();
  uint256 newItemId = _tokenIds.current();
  _setTokenURI(newItemId, tokenURI);
  return newItemId;
}

}
