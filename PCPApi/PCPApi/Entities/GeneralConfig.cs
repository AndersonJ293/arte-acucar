using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using PCPApi.Entities;

[Table("general_config")]
public class GeneralConfig
{
    [Key]
    [Column("generalconfigid")]
    public int Id { get; set; }

    [Column("companyid")]
    public int CompanyId { get; set; }
    
    [JsonIgnore]
    public Company Company { get; set; }

    [Column("monthlyworkdays")]
    public int MonthlyWorkDays { get; set; }

    [Column("dailyworkhours")]
    public int DailyWorkHours { get; set; }

    [MaxLength(255)]
    [Column("hourlysalary")]
    public string HourlySalary { get; set; }

    [Column("monthlysalary")]
    public int MonthlySalary { get; set; }

    [MaxLength(255)]
    [Column("updated_at")]
    public string UpdatedAt { get; set; }
    
}

