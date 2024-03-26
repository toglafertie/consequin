  const checkPreapprovals = async (
    chain: string,
    contractAddress: string,
    activeGameAddress: string,
    walletSigner: Signer
  ): Promise<boolean> => {
    const preapprovals = await getPreapprovals(
      chain,
      contractAddress,
      activeGameAddress,
      walletSigner
    );
    const hasPreapprovals = preapprovals.length > 0;

    if (!hasPreapprovals) {
      console.log('No preapprovals found. Please approve the contract.');
      return false;
    }

    return true;
  };  
