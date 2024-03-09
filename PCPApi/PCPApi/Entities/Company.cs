using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PCPApi.Entities;

[Table("company")]
public class Company
{
    [Key]
    [Column("companyid")]
    public int Id { get; set; }

    [MaxLength(255)]
    [Column("companyname")]
    public string CompanyName { get; set; }
    
}
