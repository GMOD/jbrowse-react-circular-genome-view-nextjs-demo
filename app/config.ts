export const assembly = {
  name: 'hg19',
  aliases: ['GRCh37'],
  uri: 'https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz',
  refNameAliases: {
    uri: 'https://jbrowse.org/genomes/hg19/hg19_aliases.txt',
  },
}

export const tracks = [
  {
    trackId: 'pacbio_sv_vcf',
    name: 'HG002 Pacbio SV (VCF)',
    category: ['GIAB'],
    uri: 'https://jbrowse.org/genomes/hg19/pacbio/hs37d5.HG002-SequelII-CCS.bnd-only.sv.vcf.gz',
  },
]

export const view = { tracks: ['pacbio_sv_vcf'] }
